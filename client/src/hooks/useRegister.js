import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://review-automation-backend.onrender.com";

    
export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const register = async(business) => {
        setIsLoading(true)
        setError(null)

        const response = await axios.post(domain + '/business/create', business)  
        
        if(!response) {
            setIsLoading(false)
            setError(error)
        }

        if(response) {
            localStorage.setItem('user', JSON.stringify(response.data))

            //update authCOntext
            dispatch({type: 'REGISTER', payload: response.data})

            setIsLoading(false)

            return response;
        }
    }

        const checkCustomer = async (leadId) => {
        try {
            setIsLoading(true)
            setError(null)

            const response = await axios.get(`${domain}/business/validate-customer/${leadId}`)

            // Always return response.data, not the full Axios response
            return response.data
        } catch (err) {
            setError(err.response?.data || err.message)
            throw err
        } finally {
            setIsLoading(false)
        }
        }

    return { register, checkCustomer, isLoading, error}

}
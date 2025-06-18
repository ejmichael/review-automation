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

    return { register, isLoading, error}

}
import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://review-automation-backend.onrender.com";


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (formData) => {
        setIsLoading(true)
        setError(null)

        try {

            const response = await axios.post(domain + '/business/login', formData)

             if(!response) {
                setIsLoading(false)
                setError(error)
            }

            if(response.status === 201) {
                localStorage.setItem('user', JSON.stringify(response.data))
                dispatch({ type: 'LOGIN', payload: response.data });
            } else if (response.status === 400) {
                    setError(response.data.message);
            }
            setIsLoading(false);

            return response;

        } catch(err) {
            setIsLoading(false);
            setError(err.response.data.message);
        }
    }
    return { login, isLoading, error}
}
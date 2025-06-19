import { useAuthContext } from "../hooks/useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    
    const logout = () => {
        //remove from local storage
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
        
        
    }
    return { logout }
}
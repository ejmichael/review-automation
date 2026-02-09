import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return {
                user: action.payload
            }
        case 'LOGOUT':
            return { user: null}
        default: 
            return state
    }
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: (() => {
            try {
                const storedUser = localStorage.getItem('user');
                return storedUser ? JSON.parse(storedUser) : null;
            } catch {
                return null;
            }
        })()
    });

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
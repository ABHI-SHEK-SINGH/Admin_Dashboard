import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    Current_User: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.Current_User));
    }, [state.Current_User]);

    return (
        <AuthContext.Provider value={{ Current_User: state.Current_User, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}; 
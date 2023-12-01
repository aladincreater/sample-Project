import React, { createContext, useState,useContext, ReactNode } from "react";

interface AuthContextProps {
    auth:Boolean,
    authenticate :(authorize:boolean)=>void;
}

export const AuthContext = createContext<AuthContextProps>({auth:false,authenticate: () => { }});

interface AuthenticationProps{
    children:ReactNode;
}

export const Authentication: React.FC<AuthenticationProps> = ({children}) =>{
    const [auth,setAuth] = useState<boolean>(false);
    const authenticate = (authorize:boolean):any =>{  
        setAuth(()=>authorize);
    }
    return(
        <AuthContext.Provider value={{auth,authenticate}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =() => useContext(AuthContext);
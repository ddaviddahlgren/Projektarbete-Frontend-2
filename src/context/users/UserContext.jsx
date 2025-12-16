import { createContext, useState,useEffect, use} from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [users, setUsers]=useState(JSON.parse(localStorage.getItem("users")) || []);
    const [loggedInUser, setLoggedInUser]=useState(JSON.parse(sessionStorage.getItem("loggedInUser")) || null);
    
    const [username, setUsername]=useState(null);
    const [password, setPassword]=useState(null);

    
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    },[users]);

    useEffect(()=>{
         sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    },[loggedInUser]);

 



    return(
        <UserContext.Provider value={{
            users, setUsers,
            loggedInUser, setLoggedInUser,
            username, setUsername,
            password, setPassword
        }}>
         {children}
        </UserContext.Provider>
    )
}


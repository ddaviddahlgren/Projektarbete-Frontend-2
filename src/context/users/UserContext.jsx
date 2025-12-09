import { createContext, useState,useEffect} from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [users, setUsers]=useState(JSON.parse(localStorage.getItem("users")) || []);


    useEffect(()=>{
        
    },[]);

    return(
        <UserContext.Provider value={{
          
        }}>
         {children}
        </UserContext.Provider>
    )
}


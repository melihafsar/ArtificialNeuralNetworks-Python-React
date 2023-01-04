import React, { createContext, useState, useContext, useEffect } from 'react'

const Context = createContext();
export const AuthProvider = ( {children} ) => {
    // user is active or not
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')) || false);
    //active user's id
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || 0);
    //active user's information
    const [userInfo, setUserInfo ] = useState({});
    
    // userIdDB is the user id from the database
    const data = {
        user,
        setUser,
        userId,
        setUserId,
        userInfo,
        setUserInfo,
    }

    useEffect (() => {
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('userId',JSON.stringify(userId));

    },[user,userId])

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export const useAuth = () => useContext(Context);
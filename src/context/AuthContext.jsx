import React, { createContext, useState, useContext, useEffect } from 'react'
import { auth } from '../firebase/firebaseConfig';

const Context = createContext();
export const AuthProvider = ( {children} ) => {
    // user is active or not
    const [user,setUser] = useState(auth.currentUser != null);
    //active user's id
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || 0);
    //active user's information
    const [userInfo, setUserInfo ] = useState({});

    const [isInitialized, setIsInitialized] = useState(false);
    
    // userIdDB is the user id from the database
    const data = {
        user,
        setUser,
        userId,
        setUserId,
        userInfo,
        setUserInfo,
        isInitialized,
        setIsInitialized
    }

    useEffect (() => {
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('userId',JSON.stringify(userId));
    },[user,userId])

    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged((user) => {
            setUser(user != null);
            setIsInitialized(true);
            unsubscribe();
        });
    },[])

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export const useAuth = () => useContext(Context);
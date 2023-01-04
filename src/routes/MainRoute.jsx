import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Profile from "../pages/Profile";
import Page404 from '../pages/Page404';
import HomePage from '../pages/HomePage';
import PrivateRoute from './PrivateRoute';
import Contacts from '../pages/Contacts';

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/homepage' element={<PrivateRoute><HomePage/></PrivateRoute>} />
                <Route path='/contacts' element={<PrivateRoute><Contacts/></PrivateRoute>} />
                <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    )
}

export default MainRoute
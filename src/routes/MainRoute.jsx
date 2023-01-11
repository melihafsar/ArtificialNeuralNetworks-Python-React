import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Profile from "../pages/Profile";
import Page404 from '../pages/Page404';
import HomePage from '../pages/HomePage';
import PrivateRoute from './PrivateRoute';
import RootRoute from './RootRoute';
import Contacts from '../pages/Contacts';
import RegisterPage from '../pages/RegisterPage';
import Test from '../pages/Test';

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<RootRoute />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/homepage' element={<PrivateRoute><HomePage/></PrivateRoute>} />
                <Route path='/contacts' element={<PrivateRoute><Contacts/></PrivateRoute>} />
                <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
                <Route path='/admin/test' element={<PrivateRoute><Test/></PrivateRoute>}/>
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    )
}

export default MainRoute
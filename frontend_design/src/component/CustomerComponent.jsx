import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import CustomerNav from '../Navbar/CustomerNav';

const CustomerComponent = () => {

    const auth = sessionStorage.getItem('role');
    console.log("custnav", auth);
    return auth ? <><CustomerNav /><Outlet /></> : <Navigate to="/Login" />
}

export default CustomerComponent

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import CustomerNav from '../Navbar/CustomerNav';
// Private Route OR Private Component

const AdminComponent = () => {
    //console.log("private");
    const auth = sessionStorage.getItem('role');
    return auth ? <><CustomerNav /><Outlet /></> : <Navigate to="/Login" />
}

export default AdminComponent;
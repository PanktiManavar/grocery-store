import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminNav from '../Navbar/AdminNav';
// Private Route OR Private Component

const AdminComponent = () => {
    //console.log("private");
    const auth = sessionStorage.getItem('role');
    console.warn(auth);
    return auth ? <><AdminNav /><Outlet /></> : <Navigate to="/Login" />
}

export default AdminComponent;

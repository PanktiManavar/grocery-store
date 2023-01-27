import React from "react";
import { Outlet } from "react-router-dom";
import AllNav from '../Navbar/AllNav';

// Private Route OR Private Component

const AllcComponent = () => {
    //console.log("private");
    const auth = sessionStorage.getItem('role');
    console.log("adcom" + auth);
    return auth ? <></> : <><AllNav /><Outlet /></>
}

export default AllcComponent;

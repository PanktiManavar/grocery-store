import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "../Viewers/NavBar";

const NavbarComponent = () => {
    const auth = sessionStorage.getItem('role');
    console.log("adcom" + auth);
    return auth ? <></> : <><NavBar /><Outlet /></>
}

export default NavbarComponent
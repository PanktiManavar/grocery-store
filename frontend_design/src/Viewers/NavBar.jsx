import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <header className="header">

                <a href="/Home" className="logo"> <i><FaShoppingCart></FaShoppingCart></i> Grocery </a>

                <nav className="navbar">
                    <a href="/Admin/AdminHome">Home</a>
                    <a href="/Product">Product</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                    <a href="/Login">Login</a>
                </nav>

            </header>

        </>
    );
};
export default NavBar;
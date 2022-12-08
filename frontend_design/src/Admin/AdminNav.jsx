import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AdminNav = () => {
    return (
        <>
            <header className="header">
                <a href="/Home" className="logo"> <i><FaShoppingCart></FaShoppingCart></i> Grocery </a>

                <nav className="navbar">
                    <a href="/Admin/AdminHome">Home</a>
                    <a href="/AdminProduct">Product Add</a>
                    <a href="#!">Pincode</a>
                    <a href="#!">Delivery boy</a>
                </nav>

            </header>
        </>
    );
};

export default AdminNav;
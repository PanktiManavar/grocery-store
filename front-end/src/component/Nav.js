import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <ul className="nav-ul">
                <img alt="logo" src="../logov.png" className="nav-img"></img>
                <li><Link to="/">Aboutus</Link></li>
                <li><Link to="/categoty">Category</Link></li>
                <li><Link to="/pincode">Pincode</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </div>
    )
}
export default Nav;
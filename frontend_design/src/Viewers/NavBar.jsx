import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const user = sessionStorage.getItem("role");
    //const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        // navigate("/login");
    }

    console.log("Helllo", user);

    return (
        <>
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/Home">
                            Grocery Store
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {
                                    user ?
                                        <>
                                            <a href='/Login' className="nav-link" onClick={logout}>Logout</a>
                                        </>
                                        :
                                        <>
                                            <a href='/Login' className="nav-link">Login</a>

                                            <a href='/Signin' className='nav-link'>SignIn</a>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
};
export default NavBar;
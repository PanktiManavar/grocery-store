import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const CustomerNav = () => {
    const auth = sessionStorage.getItem('role');
    return (
        <div className="d-flex flex-column  sidebar-div header">
            <header>
                {auth ?
                    <nav className="navbar">
                        <a href="/Home">Home</a>
                        <a href="/Product">Product</a>
                        <a href="/About">About</a>
                        <a href="/Contact">Contact</a>
                        <div className='cust-nav'>
                            <a href='#'>Cart</a>
                            <a href='#'>My Account</a>
                        </div>
                    </nav>
                    :
                    <nav className='nav-ul nav-right'>
                        <li><Link to="/Signin">SignUp</Link></li>
                        <li><Link to="/Login">Login</Link></li>

                    </nav>
                }
            </header>
        </div>



    )
}

export default CustomerNav



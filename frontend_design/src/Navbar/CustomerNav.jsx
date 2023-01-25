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
                        <a href="/Homee">Home</a>
                        <a href="/Productt">Product</a>
                        <a href="/Aboutt">About</a>
                        <a href="/Contactt">Contact</a>
                        <div className='cust-nav nav-right'>
                            <a href='#'>Cart</a>
                            <a href='#'>My Account</a>
                        </div>
                    </nav>
                    :
                    <nav className='nav-ul nav-right nav-right'>
                        <li><Link to="/Signin">SignUp</Link></li>
                        <li><Link to="/Login">Login</Link></li>

                    </nav>
                }
            </header>
        </div>



    )
}

export default CustomerNav



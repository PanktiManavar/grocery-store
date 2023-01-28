import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
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

                        <a href='#'>Cart</a>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" href >
                                MyAccount
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/Changepassword">Chnage Password</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </nav>
                    :
                    <nav className='nav-ul nav-right nav-right'>
                        <li><Link to="/Signin">SignUp</Link></li>
                        <li><Link to="/Login">Login</Link></li>

                    </nav>
                }
            </header>
        </div >



    )
}

export default CustomerNav



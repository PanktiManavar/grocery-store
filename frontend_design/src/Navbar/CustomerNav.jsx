import React from 'react'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";

const CustomerNav = () => {

    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear();
        navigate("/Login");
    }
    const auth = sessionStorage.getItem('role');

    useEffect(() => {
        getcategoryname();

    }, [])

    const getcategoryname = async () => {
        let result = await fetch("api/categoryActiveselect");
        result = await result.json();
        setCategory(result.result);
        console.log(result.result);
    }
    return (
        <div>
            {auth ?
                <Navbar collapseOnSelect expand="lg" className="navbar" style={{ backgroundColor: "#119c72", padding: "20px" }}>
                    <Container>
                        <Navbar.Brand href="#home" style={{ fontSize: "20px", fontFamily: "sans-serif", color: "white" }}>Grocery Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "16px" }}>
                            <Nav className="me-auto">
                                <NavDropdown title="Category" id="collasible-nav-dropdown" style={{ color: "#030303" }} >
                                    {
                                        category.length > 0 ? category.map((item, index) => (
                                            <NavDropdown.Item style={{ fontSize: "14px" }} key={item._id}>
                                                {item.cname}
                                            </NavDropdown.Item>
                                        ))
                                            :
                                            <NavDropdown.Item></NavDropdown.Item>
                                    }

                                </NavDropdown>
                                <Nav.Link href="/Productt" style={{ color: "#030303" }}>Product</Nav.Link>
                                <Nav.Link href="/Aboutt" style={{ color: "#030303" }}>About</Nav.Link>
                                <Nav.Link href="/Contactt" style={{ color: "#030303" }}>Contact</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/Cart"><FaShoppingCart /></Nav.Link>

                                <NavDropdown title="Account" id="collasible-nav-dropdown" style={{ color: "#030303" }}>
                                    <NavDropdown.Item href="/Changepassword" style={{ fontSize: "14px" }}>Change Password</NavDropdown.Item>
                                    <NavDropdown.Item href="/Login" onClick={logout} style={{ fontSize: "14px" }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
                :
                <Nav className='nav-ul nav-right nav-right'>
                    <li><Nav.Link to="/Signin"><FaUser />SignUp</Nav.Link></li>
                    <li><Nav.Link to="/Login">Login</Nav.Link></li>
                </Nav>
            }
        </div >

    )
}

export default CustomerNav



import React from 'react'
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AdminNav = () => {
    const navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear();
        navigate("/Login");
    }
    const auth = sessionStorage.getItem('role');
    return (

        <div>
            {auth ?
                <Navbar collapseOnSelect expand="lg" className="navbar " style={{ backgroundColor: "#119c72", padding: "20px" }}>
                    <Container>
                        <Navbar.Brand href="#home" style={{ fontSize: "20px", fontFamily: "sans-serif", color: "white" }}>Grocery Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "16px" }}>
                            <Nav className="me-auto" >
                                <Nav.Link href="/AdminHome" style={{ color: "#030303" }}>DashBord</Nav.Link>
                                <Nav.Link href="/SelectCategory" style={{ color: "#030303" }}>Category</Nav.Link>
                                <Nav.Link href="/SelectSubCategory" style={{ color: "#030303" }}>SubCategory</Nav.Link>
                                <Nav.Link href="/SelectPincode" style={{ color: "#030303" }}>Pincode</Nav.Link>
                                <Nav.Link href="/SelectProduct" style={{ color: "#030303" }}>Product</Nav.Link>
                                <Nav.Link href="/SelectDeliverBoy" style={{ color: "#030303" }}>DeliveryBoy</Nav.Link>
                                <Nav.Link href="/AdminOrderView" style={{ color: "#030303" }}>Order</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/Notification" style={{ color: "#030303" }}>Notification</Nav.Link>

                                <NavDropdown title="Account" id="collasible-nav-dropdown" style={{ color: "#030303" }}>
                                    <NavDropdown.Item href="/ChangepasswordAdmin" style={{ fontSize: "14px", color: "#030303" }}>Change Password</NavDropdown.Item>
                                    <NavDropdown.Item href="/Login" onClick={logout} style={{ fontSize: "14px", color: "#030303" }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
                :
                <Nav className='nav-ul nav-right'>
                    <li><Link to="/Signin">SignUp</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </Nav>
            }
        </div >
    )
}

export default AdminNav
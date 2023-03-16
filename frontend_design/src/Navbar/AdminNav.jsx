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
                //         <nav className="navbar">
                //             <a href="/AdminHome">DashBord</a>
                //          <a href="/Product">Manage Product</a> 
                //              <Dropdown>
                //                 <Dropdown.Toggle variant="none" href >
                //                     Manage Product
                //                 </Dropdown.Toggle>
                //                 <Dropdown.Menu>
                //                     <Dropdown.Item href="/AddProduct">Add Product</Dropdown.Item>
                //                     <Dropdown.Item href="/SelectProduct">View Product</Dropdown.Item>
                //                 </Dropdown.Menu>
                //             </Dropdown>
                //             <Dropdown>
                //                 <Dropdown.Toggle variant="none" href >
                //                     Manage Category
                //                 </Dropdown.Toggle>
                //                 <Dropdown.Menu>
                //                     <Dropdown.Item href="/AddCategory">Add Category</Dropdown.Item>
                //                     <Dropdown.Item href="/SelectCategory">View Category</Dropdown.Item>
                //                 </Dropdown.Menu>
                //             </Dropdown>
                //             <Dropdown>
                //                 <Dropdown.Toggle variant="none" href >
                //                     Manage Sub Category
                //                 </Dropdown.Toggle>
                //                 <Dropdown.Menu>
                //                     <Dropdown.Item href="/AddSubCategory">Add Sub Category</Dropdown.Item>
                //                     <Dropdown.Item href="/SelectSubCategory">View Sub Category</Dropdown.Item>
                //                 </Dropdown.Menu>
                //             </Dropdown>
                //             <Dropdown>
                //                 <Dropdown.Toggle variant="none" href >
                //                     Manage Pincode
                //                 </Dropdown.Toggle>
                //                 <Dropdown.Menu>
                //                     <Dropdown.Item href="/AddPincode">Add Pincode</Dropdown.Item>
                //                     <Dropdown.Item href="/SelectPincode">View Pincode</Dropdown.Item>
                //                 </Dropdown.Menu>
                //             </Dropdown>
                //             <Dropdown>
                //                 <Dropdown.Toggle variant="none" href >
                //                     Manage DeliveryBoy
                //                 </Dropdown.Toggle>
                //                 <Dropdown.Menu>
                //                     <Dropdown.Item href="/AddDeliveryBoy">Add DeliveryBoy</Dropdown.Item>
                //                     <Dropdown.Item href="/SelectDeliverBoy">View DeliveryBoy</Dropdown.Item>
                //                 </Dropdown.Menu>
                //             </Dropdown> 
                // </nav>

                <Navbar collapseOnSelect expand="lg" className="navbar fixed-top " style={{ backgroundColor: "#bac34e", padding: "20px" }}>
                    <Container>
                        <Navbar.Brand href="#home" style={{ fontSize: "20px", fontFamily: "sans-serif", color: "white" }}>Grocery Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "16px" }}>
                            <Nav className="me-auto">
                                <Nav.Link href="/AdminHome">DashBord</Nav.Link>
                                <Nav.Link href="/SelectCategory">Category</Nav.Link>
                                <Nav.Link href="/SelectSubCategory">SubCategory</Nav.Link>
                                <Nav.Link href="/SelectPincode">Pincode</Nav.Link>
                                <Nav.Link href="/SelectProduct">Product</Nav.Link>
                                <Nav.Link href="/SelectDeliverBoy">DeliveryBoy</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/Notification">Notification</Nav.Link>

                                <NavDropdown title="Account" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item href="/Changepassword" style={{ fontSize: "14px" }}>Change Password</NavDropdown.Item>
                                    <NavDropdown.Item href="/Login" onClick={logout} style={{ fontSize: "14px" }}>Logout</NavDropdown.Item>
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
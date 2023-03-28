import React from 'react'
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

const CustomerNav = () => {

    const [category, setCategory] = useState("");
    const [Subcategory, setSubCategory] = useState("");
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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

    const handleShow = async (id) => {
        let results = await fetch(`/api/subcategoryByCategoryid/${id}`);
        results = await results.json();
        setSubCategory(results.result);
        setShow(true);
        return console.log(results.result);
    }

    return (
        <div>
            <Modal className="modal fade" show={show} onHide={handleClose} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <Modal.Header closeButton>
                    <Modal.Title>Sub Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        {Subcategory.length > 0 ? Subcategory.map((item) => (
                            <div class="col-sm-3">
                                <div className="btn" style={{ width: "120px" }}>
                                    <div className='p-3 card '>
                                        <div>
                                            {auth ?
                                                <Link to={`/Productt/${item._id}`} style={{ textDecoration: "none" }} >
                                                    <h6>{item.sname}</h6>
                                                </Link>
                                                :
                                                <Link to={`/Product/${item._id}`} style={{ textDecoration: "none" }}>
                                                    <h6>{item.sname}</h6>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                            :
                            <h4 style={{ color: "red" }}>Sub Category Not Found</h4>
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancle
                    </Button>

                </Modal.Footer>
            </Modal>
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
                                            <NavDropdown.Item style={{ fontSize: "14px" }} key={item._id} onClick={() => { handleShow(item._id) }}>
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



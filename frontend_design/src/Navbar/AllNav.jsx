import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

const AllNav = () => {
    const [category, setCategory] = useState("");
    const [Subcategory, setSubCategory] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => setShow(false);

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
        // <div>

        //     {auth ?
        //         <nav>

        //         </nav> :
        //         <Navbar collapseOnSelect expand="lg" className="navbar" style={{ backgroundColor: "#119c72", padding: "13px" }}>
        //             <Container>
        //                 <Navbar.Brand href="#home" style={{ fontSize: "20px", fontFamily: "sans-serif", color: "white" }}>Grocery Store</Navbar.Brand>
        //                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //                 <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "16px" }}>
        //                     <Nav className="me-auto">
        //                         <NavDropdown title="Category" id="collasible-nav-dropdown" style={{ color: "#030303" }} >
        //                             {
        //                                 category.length > 0 ? category.map((item, index) => (
        //                                     <NavDropdown.Item style={{ fontSize: "14px" }} key={item._id} >
        //                                         {item.cname}
        //                                     </NavDropdown.Item>
        //                                 ))
        //                                     :
        //                                     <NavDropdown.Item></NavDropdown.Item>
        //                             }

        //                         </NavDropdown>
        //                         {/* <Nav.Link href="/Home" style={{ color: "#030303" }}>Home</Nav.Link> */}
        //                         <Nav.Link href="/Product" style={{ color: "#030303" }}>Product</Nav.Link>
        //                         <Nav.Link href="/About" style={{ color: "#030303" }}>About</Nav.Link>
        //                         <Nav.Link href="/Contact " style={{ color: "#030303" }}>Contact </Nav.Link>
        //                     </Nav>
        //                     <Nav>
        //                         <Nav.Link href="/Login" style={{ color: "#030303" }}>Login</Nav.Link>
        //                         <Nav.Link href="/Signin" style={{ color: "#030303" }}>SignUp</Nav.Link>
        //                     </Nav>
        //                 </Navbar.Collapse>
        //             </Container>
        //         </Navbar >
        //     }
        // </div>
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
                                                <Link to={`/Productt/${item._id}`} style={{ textDecoration: "none" }}>
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


                <Nav className='nav-ul nav-right nav-right'>
                    {/* <li><Nav.Link to="/Signin"><FaUser />SignUp</Nav.Link></li> */}
                    <li><Nav.Link to="/Login">Login</Nav.Link></li>
                </Nav>
                :
                <Navbar collapseOnSelect expand="lg" className="navbar" style={{ backgroundColor: "#119c72", padding: "20px" }}>
                    <Container>
                        <Navbar.Brand href="#home" style={{ fontSize: "20px", fontFamily: "sans-serif", color: "white", textAlign: "left" }}>Grocery Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "16px" }}>
                            <Nav className="me-auto">
                                <NavDropdown title="Category" id="collasible-nav-dropdown" style={{ color: "#030303", marginRight: "4px" }}  >
                                    {
                                        category.length > 0 ? category.map((item, index) => (
                                            <NavDropdown.Item style={{ fontSize: "14px" }} key={item._id} onClick={() => { handleShow(item._id) }}>
                                                {item.cname}
                                            </NavDropdown.Item>
                                        ))
                                            :
                                            <NavDropdown.Item> Not Found</NavDropdown.Item>
                                    }
                                </NavDropdown>
                                <Nav.Link href="/Product" style={{ color: "#030303", marginRight: "4px" }}>Product</Nav.Link>
                                <Nav.Link href="/About" style={{ color: "#030303", marginRight: "4px" }}>About</Nav.Link>
                                <Nav.Link href="/Contact" style={{ color: "#030303", marginRight: "4px" }}>Contact</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/Login" style={{ color: "#030303" }}>Login</Nav.Link>
                                <Nav.Link href="/Signin" style={{ color: "#030303" }}>SignUp</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            }
        </div >
    )
}

export default AllNav

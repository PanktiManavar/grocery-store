import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AllNav = () => {
    const auth = sessionStorage.getItem('role');
    return (
        <div>
            {auth ?
                <nav>

                </nav> :
                // <nav className="navbar">
                //     <a href="/Home">Home</a>
                //     <a href="/Product">Product</a>
                //     <a href="/About">About</a>
                //     <a href="/Contact">Contact</a>
                // </nav>

                // <Navbar collapseOnSelect expand="lg" className="navbar fixed-top" style={{ backgroundColor: "#bac34e", padding: "15px" }}>
                //     <Container>
                //         <Navbar.Brand href="#home" style={{ fontSize: "19px", fontFamily: "sans-serif", color: "white" }}>Grocery Store</Navbar.Brand>
                //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                //         <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "6px" }}>
                //             <Nav className="me-auto" >
                //                 <Nav.Link href="/Home">Home</Nav.Link>
                //                 <Nav.Link href="/Product">Product</Nav.Link>
                //                 <Nav.Link href="/About">About</Nav.Link>
                //                 <Nav.Link href="/Contact">Contact</Nav.Link>
                //             </Nav>
                //             <Nav>
                //                 <Nav.Link href="/Login">Login</Nav.Link>
                //                 <Nav.Link href="/Signin">SignUp</Nav.Link>
                //             </Nav>
                //         </Navbar.Collapse>
                //     </Container>
                // </Navbar >


                <Navbar collapseOnSelect expand="lg" className="navbar fixed-top " style={{ backgroundColor: "#119c72", padding: "13px" }}>
                    <Container>
                        <Navbar.Brand href="#home" style={{ fontSize: "20px", fontFamily: "sans-serif", color: "white" }}>Grocery Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" style={{ fontSize: "16px" }}>
                            <Nav className="me-auto">
                                <Nav.Link href="/Home" style={{ color: "#030303" }}>Home</Nav.Link>
                                <Nav.Link href="/Product" style={{ color: "#030303" }}>Product</Nav.Link>
                                <Nav.Link href="/About" style={{ color: "#030303" }}>About</Nav.Link>
                                <Nav.Link href="/Contact " style={{ color: "#030303" }}>Contact </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/Login" style={{ color: "#030303" }}>Login</Nav.Link>
                                <Nav.Link href="/Signin" style={{ color: "#030303" }}>SignUp</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar >
            }
        </div>
    )
}

export default AllNav

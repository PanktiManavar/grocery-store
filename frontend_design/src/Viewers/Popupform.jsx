import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Image } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";


const Popupform = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container mt-3">

            <Button variant="primary" onClick={handleShow}>
                click modal
            </Button>
            <Modal class="modal fade" show={show} onHide={handleClose} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <Modal.Header closeButton>
                    <Modal.Title>Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Image src='' width={"200px"} height={"200px"}></Image>
                        </div>
                        <div className='col-sm-4'>
                            <h4>jhsjhdjhdj</h4>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <Modal className="modal fade" show={show} onHide={handleClose} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <Modal.Header closeButton>
                    <Modal.Title>Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <Image src={`http://localhost:8000/${prod.pimg}`} alt="Loading" width={"200px"} height={"200px"}></Image>
                        </div>
                        <div className='col-sm-6'>
                            <div className="col-md-6">
                                <h4 className='text-uppercase text-black-50'>
                                    Category : {subid}
                                </h4>
                                <h1 className='display-6'>{prod.pname}</h1>
                                <h3 className="display-8 fw-bold my-4">
                                    Rs.{prod.price}
                                </h3>
                            </div>
                        </div>
                        <p className="lead">
                            {prod.descripation}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Add to cart
                    </Button>
                  
                </Modal.Footer>
            </Modal> */}

        </div>
    )
}

export default Popupform
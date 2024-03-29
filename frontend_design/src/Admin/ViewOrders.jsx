import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ViewOrders = () => {

  const [order, setOrder] = useState([]);
  const [dboy, setDeliverBoy] = useState([]);
  const [sdboy, setsDeliverBoy] = useState([]);
  const [dboyadd, setAdddboy] = useState('');
  const [oid, setOids] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');

  useEffect(() => {
    getorder();
  }, [])

  const getorder = async () => {
    let result = await fetch(`/api/viewallOrder`);
    result = await result.json();
    if (result) {
      setOrder(result.result);
      console.log(result.result);

    }
  }

  const handleShow = async (oid, e) => {
    e.preventDefault()
    let result = await fetch(`/api/deliveryboylist`);
    result = await result.json();
    if (result) {
      setDeliverBoy(result.result);
      // console.log(result.result);
      console.log(result.result);
      setOids(oid);
    }
    setShow(true);
  }
  // const handleShow = (e) => setShow(true);

  const adddelievboy = async () => {
    // e.preventDefault()
    let id = oid
    // return alert(sdboy)
    let result = await fetch(`/api/adddelivery/${id}`, {
      method: 'put',
      body: JSON.stringify({ Drid: sdboy }),
      headers: {
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("add boy");
    }
  }

  return (
    <>
      <Modal className="modal fade" show={show} onHide={handleClose} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <Modal.Header closeButton>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Orderid address</Form.Label>
              <Form.Control
                type="text"
                placeholder={oid}

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select DeliveryBoy</Form.Label>
              <div className="form-group">
                <select className="form-control" onChange={(e) => setsDeliverBoy(e.target.value)}>
                  <option value={0}>----Select Delivery Boy----</option>
                  {
                    dboy.length > 0 ? dboy.map((item, index) => (
                      <option key={item._id} value={item._id}>{item.Fname}</option>
                    ))
                      : <option value={0}>No Records Founds!</option>
                  }
                </select>
              </div>

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} style={{ backgroundColor: "blue" }}>
            Cancle
          </Button>
          <Button variant="secondary" onClick={adddelievboy} className='btn btn-primary px-8 py-3' style={{ backgroundColor: "grey" }} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form>
              <h2 className="text-center"><strong>Order List.</strong></h2>
              <div className="form-group">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <td>Sr.No.</td>
                      <td>Order Item</td>
                      <td>Customer</td>
                      <td>Method</td>
                      <td>Status</td>
                      <td>Pincode</td>
                      <td>Action</td>
                      <td>Add D-boy</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      order.length > 0 ? order.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item._id}</td>
                          <td>{item.Rid[0].Fname} {item.Rid[0].Lname}</td>
                          <td>{item.payment_type}</td>
                          <td>{item.ostatus}</td>
                          <td>{item.Pinid[0].pcode}</td>
                          <td>View</td>
                          <td>
                            <button className='btn ' onClick={(e) => { handleShow(item._id, e) }} style={{ backgroundColor: "lightgrey" }}>Add</button>
                          </td>
                        </tr>
                      )) :
                        <tr> <td colSpan="4" style={{ textAlign: "center" }}><strong>No Records
                          Founds!</strong></td></tr>
                    }
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </FormContainer>
    </>
  )
}

export default ViewOrders;

const FormContainer = styled.div`{
  .register-photo {
   background:#f1f7fc;
   padding:80px 0;
 }
 .styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 700px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-size: 100px;
  font-size:14px;
}

.link{
  text-decoration:none;
  color:white;
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: center;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
 .register-photo .image-holder {
   display:table-cell;
   width:150px;
   background:url(image/rglg.jpg);
   background-size:cover;
 }
 
 .register-photo .form-container {
   display:table;
   max-width:900px;
   width:90%;
   margin:0 auto;
   margin-top:10px;
   box-shadow:1px 1px 5px rgba(0,0,0,0.1);
 }
 
 .register-photo form {
   display:table-cell;
   width:400px;
   background-color:#ffffff;
   padding:40px 60px;
   color:#505e6c;
 }
 
 @media (max-width:991px) {
   .register-photo form {
     padding:40px;
   }
 }
 
 .register-photo form h2 {
   font-size:24px;
   line-height:1.5;
   margin-bottom:30px;
 }
 
 .register-photo form .form-control {
   background:#f7f9fc;
   border:none;
   border-bottom:1px solid #dfe7f1;
   border-radius:0;
   box-shadow:none;
   outline:none;
   color:inherit;
   text-indent:6px;
   height:40px;
   margin-top:10px;
   font-size:12px;
 }
 
 .register-photo form .form-check {
   font-size:13px;
   line-height:20px;
 }
 
 .register-photo form .btn-primary {
   background:#f4476b;
   border:none;
   border-radius:4px;
   padding:11px;
   box-shadow:none;
   
   text-shadow:none;
   outline:none !important;
 }
 
 .register-photo form .btn-primary:hover, .register-photo form .btn-primary:active {
   background:#eb3b60;
 }
 
 .register-photo form .btn-primary:active {
   transform:translateY(1px);
 }
 
 .register-photo form .already {
   display:block;
   text-align:center;
   font-size:12px;
   color:#6f7a85;
   opacity:0.9;
   text-decoration:none;
 }
 }
 `;
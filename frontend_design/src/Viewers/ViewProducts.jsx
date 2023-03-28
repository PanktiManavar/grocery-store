import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Image } from "react-bootstrap";
import swal from 'sweetalert';



const ViewProducts = () => {

  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subid, setSubid] = useState('');
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [prod, setProducts] = useState([]);
  const [subids, setSubids] = useState('');

  const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');

  useEffect(() => {
    // return console.log(auth);
    getProduct();

  }, [])

  const getProduct = async () => {
    setLoading(true);
    let result = await fetch(`/api/ProductSelectBySubdId/${params.id}`);
    result = await result.json()
    // console.log(result.result);
    setProduct(result.result);
    setLoading(false);
  }

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  //model view for one product details
  const handleShow = async (id) => {
    setLoading(true);
    let result = await fetch(`/api/productselectbyid/${id}`);
    result = await result.json()
    // console.log(result.result);
    setProducts(result.result);
    setSubids(result.result.subid[0].sname)
    // return console.log(result.result.subid[0].sname);
    setLoading(false);
    setShow(true);
  }

  const Addcart = async () => {
    {
      auth ?
        cart()
        :
        navigate("/Login");
    }

  }
  const cart = async () => {
    let Rid = auth;
    let Pid = prod._id;
    let mname = prod.mname;
    console.log(Rid, "+", Pid, "+", mname, "+", prod.qty);

    let result = await fetch('/api/cartinsert/', {
      method: 'post',
      body: JSON.stringify({
        Rid,
        Pid,
        mname
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    // return console.log(result);
    if (result.error) {
      alert(result.error)
    } else if (result) {
      swal({
        title: "Cart Added!",
        text: "Your Product are add in cart!",
        icon: "success",
        button: "Okay!",
      });
      setShow(false);
      navigate('/Productt');
    }
    else {
      alert("cart not added please try again");
    }
    // console.warn(result);
  }
  const ShowProduct = () => {
    return (
      <>
        <>
          <Modal className="modal fade" show={show} onHide={handleClose} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                      Category : {subids}
                    </h4>
                    <h1 className='display-6'>{prod.pname}</h1>
                    <h3 className="display-8 fw-bold my-4">
                      Rs.{prod.price}
                    </h3>
                    <h5> Qty
                      <input className="form-control" type="number" placeholder="1" />
                    </h5>
                  </div>
                </div>
                <p className="lead">
                  {prod.descripation}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Cancle
              </Button>
              <Button variant="secondary" className='btn btn-primary px-8 py-3' onClick={Addcart} >
                Add to cart
              </Button>
            </Modal.Footer>
          </Modal>
          <FormContainer>
            <section className="products">
              <h1 className="title"> Our <span>Products</span> </h1>
              <div className="box-container">
                {product.length > 0 ? product.map((product) => {
                  return (
                    <>
                      <Card style={{ width: '20rem', textAlign: "center" }} onClick={() => { handleShow(product._id) }} >
                        <Card.Img variant="top" src={`http://localhost:8000/${product.pimg}`} alt="Loading" />
                        <Card.Body>
                          <Card.Title className='content'>{product.pname}</Card.Title>
                          <Card.Text>{product.descripation.substring(0, 20)}...</Card.Text>
                          <Card.Title>Rs.{product.price}</Card.Title>
                          {/* <Button variant="primary">Add to Cart</Button> */}
                        </Card.Body>
                      </Card>
                    </>
                  )
                })
                  :
                  <h4>Product Not Found</h4>
                }
              </div>
            </section >
          </FormContainer>
        </>
      </>
    )
  }

  return (
    <>
      <div className="container stys">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  )
}

export default ViewProducts


const FormContainer = styled.div`{
 
  .category-section{
      padding: 16px;
      border-radius: 24px;
      border: 1px solid #e0e0e0;
  }
  .categorysidebar .category {
    width:40px;
    height:40px;
    
  }
  .categorysidebar .category :hover{
    background-color:#cdffc8;
   
  }
  .category{
    margin-left:30px;
  }
  .categorysidebar{
    width:20%;
    border:1px solid #ccc;
    margin-top:10px;
    margin-left:10px;
    border-radius:10px;
  }
  .categorysidebar .category{
    display:flex;
    align-items:center;
    border: 2px solid #e7e7e7;
    padding: 10px 20px;
    flex-wrap:wrap;
    gap:10px;
  }
  .categotysidebar .category h3{
    font-size:18px;
    padding:0px;
  }
  
  img, svg {
      vertical-align: middle;
  }
    .square{
      background: grey;
      width: 160px;
      height: 150px;
      border:1px;
    }
  .pl-4{
      background-color:lightgrey;
      border: solid;
  }
    .sty-h3
    {
      text-aline:center;
      font-size:20px;
      margin-left:10px;
      margin-top:20px;
    }
  
    .square-box{
      position: relative;
      width: 50%;
      overflow: hidden;
      background: #4679BD;
  }
  
  .square-content{
      position:  absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      color: white;
      text-align: center;
  }
  }`;
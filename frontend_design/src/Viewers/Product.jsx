import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Image } from "react-bootstrap";
import swal from 'sweetalert';
const Product = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [qty, setQty] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [prod, setProduct] = useState([]);
  const [subid, setSubid] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  let componentMounted = true;
  useEffect(() => {

    getProducts();
  }, []);

  //model view for one product details
  const handleShow = async (id) => {
    setLoading(true);
    let result = await fetch(`/api/productselectbyid/${id}`);
    result = await result.json()
    // console.log(result.result);
    setProduct(result.result);
    setSubid(result.result.subid[0].sname)
    setLoading(false);
    setShow(true);
  }

  const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("api/productActiveselect");
    // return console.warn(response);
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      // console.log(filter);
    }
    return () => {
      componentMounted = false;
    };
  };

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
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
    if (qty != "") {
      let result = await fetch('/api/insertcart/', {
        method: 'post',
        body: JSON.stringify({
          Rid,
          Pid,
          qty,
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
        setShow(false);
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
    }
    else {
      alert("Your cart is not added please select the quantity of Product ")
    }
    console.log(Rid, "+", Pid, "+", mname, "+", qty);


    // console.warn(result);
  }
  const ShowProducts = () => {
    return (
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
                    Category : {subid}
                  </h4>
                  <h1 className='display-6'>{prod.pname}</h1>
                  <h3 className="display-8 fw-bold my-4">
                    Rs.{prod.price}
                  </h3>
                  <h5> Qty
                    {/* <input className="form-control" type="number" name="quantity" min="1" max="10" defaultValue='1' placeholder='1' onChange={(e) => { setQty(e.target.value); }} /> */}
                    <input id="quantity" className="form-control" type="number" min="1" max="10" value={qty} defaultValue={1} onChange={(e) => { setQty(e.target.value); }} />
                    {/* <input className="form-control" type="number" placeholder="1" /> */}
                  </h5>
                </div>
              </div>
              <p className="lead">
                {prod.descripation}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose} style={{ backgroundColor: "blue" }}>
              Cancle
            </Button>
            <Button variant="secondary" className='btn btn-primary px-8 py-3' onClick={Addcart} style={{ backgroundColor: "grey" }}>
              Add to cart
            </Button>
          </Modal.Footer>
        </Modal>
        <FormContainer>
          <section className="products">
            <h1 className="title"> Our <span>Products</span> </h1>
            <div className="box-container">
              {filter.map((product) => {
                return (
                  <>
                    <Card style={{ width: '20rem', textAlign: "center" }} onClick={() => { handleShow(product._id) }} >
                      <Card.Img variant="top" src={`http://localhost:8000/${product.pimg}`} alt="Loading" />
                      {/* {auth ?
                        <Link to={`/Productt/${product._id}`} style={{ textDecoration: "none" }}>
                          <Card.Img variant="top" src={`http://localhost:8000/${product.pimg}`} alt="Loading" />
                        </Link>
                        :
                        <Link to={`/Product/${product._id}`} style={{ textDecoration: "none" }}>
                          <Card.Img variant="top" src={`http://localhost:8000/${product.pimg}`} alt="Loading" />
                        </Link>
                      } */}
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
              }
            </div>
          </section >
        </FormContainer>
      </>

    )
  }

  return (
    <div>
      <div className="heading">
        <h1>Our Shop</h1>
        <p> <Link to="" style={{ textDecoration: "None" }}>Home </Link> {"\u00BB"} Product </p>
      </div>

      <div className='row justify-content-center'>
        {loading ? <Loading /> : <ShowProducts />}
      </div>

    </div>
  )
}

export default Product;

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
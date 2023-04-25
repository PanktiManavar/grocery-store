import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
const Cart = () => {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState("");

    const auth = sessionStorage.getItem('userid').replace(/['"]+/g, '');

    const total = cart.reduce((a, i) => a + i.qty * i.Pid[0].price, 0);
    const shipping = 20.00;
    // console.log(t);


    useEffect(() => {
        // alert(total)
        getProducts();

    }, []);

    const Minusqty = async (id, Pid, qty) => {

        let result = await fetch(`/api/Minusqty/${id}`, {
            method: 'put',
            body: JSON.stringify({ Pid, qty }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json()
        console.log(result);
        if (result.error) {
            alert(result.error)
        }
        getProducts();

    }

    const Addqty = async (id, Pid, qty) => {
        // return alert(qty)
        let result = await fetch(`/api/Addqty/${id}`, {
            method: 'put',
            body: JSON.stringify({ Pid, qty }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = await result.json()
        console.log(result);
        if (result.error) {
            alert(result.error)
        }
        getProducts();

    }

    const getProducts = async () => {
        setLoading(true);
        let result = await fetch(`api/cartgetbyid/${auth}`);
        result = await result.json();
        setCart(result);
        setLoading(false);
        setCount(result.length);
        return console.log(result[0].Pid[0]._id);
    };

    const deletecart = async (id) => {
        let result = await fetch(`api/cartdelete/${id}`, {
            method: "delete",
        });
        result = await result.json();

        getProducts();
        alert("Product is deleted");
    };

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const Showcart = () => {
        return (
            <>
                <FormContainer>
                    <div className="card" style={{ marginBlock: "15px" }}>
                        <div className="row" >
                            <div className="col-md-8 cart">
                                <div className="title">
                                    <div className="row">
                                        <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                        <div className="col align-self-center text-right text-muted">{count} items</div>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="row main text-center" >
                                        <div className="col-3" ><h4>Image</h4></div>
                                        <div className="col-4" ><h4>Name</h4></div>
                                        <div className="col-2" ><h4>Qty</h4></div>
                                        <div className="col"><h4></h4></div>
                                    </div>
                                </div>
                                {cart.map((item, index) =>
                                    <div className="row border-top border-bottom" key={index}>
                                        <div className="row main align-items-center" style={{ fontSize: "10px" }}>
                                            <div className="col-4">
                                                <img src={`http://localhost:8000/${item.Pid[0].pimg}`} alt="loading" style={{ width: "11.5rem" }} />
                                            </div>
                                            <div className="col">
                                                <div className="row text-muted">{item.Pid[0].subid[0].sname}</div>
                                                <div className="row">{item.Pid[0].pname}</div>
                                                <div className="row">Rs.{item.Pid[0].price}(1 {item.mname})</div>

                                                <div className="row" style={{ fontWeight: "bold", fontSize: "12px" }} >Rs. {item.qty * item.Pid[0].price}({item.qty} {item.mname})</div>
                                            </div>
                                            <div className="col-2" style={{ marginLeft: "24px", textAlign: "center" }}>
                                                <button onClick={() => Minusqty(item._id, item.Pid, item.qty)} style={{ backgroundColor: "white" }}>  <FaRegMinusSquare style={{ padding: 0, fontSize: 16, marginRight: "10px" }} /></button>
                                                <span style={{ fontSize: "13px" }}>{item.qty}</span>
                                                <button onClick={() => Addqty(item._id, item.Pid, item.qty)} style={{ backgroundColor: "white" }} >  <FaRegPlusSquare style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></button>

                                            </div>
                                            <div className="col" style={{ marginLeft: "30px" }}>
                                                <button style={{ backgroundColor: "white" }} onClick={() => deletecart(item._id)}> <ImCancelCircle aria-label="Hide" /></button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <a href="/Productt" style={{ textDecoration: "None" }}> <div className="back-to-shop" >{"\u00ab"} <span className="text-muted">Back to shop</span></div></a>
                            </div>
                            <div className="col-md-4 summary">
                                <div><h5><b>Summary</b></h5></div>
                                <form>
                                    <p>GIVE COUPAN CODE</p>
                                    <input placeholder="Enter your coupan code" />
                                </form>
                                <div className="row mt-4">
                                    <div className="col"> Subtotal : </div>
                                    <div className="col text-right">{`Rs. ${total}`}</div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">Shipping Cost :</div>
                                    <div className="col text-right" >{`Rs. ${shipping}`}</div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col ">Discount :</div>
                                    <div className="col text-right">0%</div>
                                </div>

                                <div className="totalprice row mt-4 ">
                                    <div className="col">TOTAL PRICE :</div>
                                    <div className="col text-right">{`Rs. ${shipping + total}`}</div>
                                    {/* <div className="col text-right">&euro; {cart[0].qty * cart[0].Pid[0].price + cart[1].qty * cart[1].Pid[0].price}</div> */}
                                </div>
                                <Link to={`/CheckOutForm/${total}`}>
                                    <button className="btn btn-primary btn-block btn"> CHECKOUT </button></Link>
                            </div>
                        </div>
                    </div>
                </FormContainer>
            </>)
    }

    return (
        <div>
            <div className="heading">
                <h1>Cart</h1>
                <p> <Link to="/Home" style={{ textDecoration: "none" }}>Home </Link> {"\u00BB"} Cart </p>
            </div>

            <div className='row justify-content-center'>
                {loading ? <Loading /> : <Showcart />}

            </div>
        </div >
    )
}

export default Cart;

const FormContainer = styled.div`{
    
    body{
      background: #ddd;
      min-height: 100vh;
      vertical-align: middle;
      display: flex;
      font-family: sans-serif;
      font-size: 0.8rem;
      font-weight: bold;
  }
  .title{
      margin-bottom: 5vh;
  }
  .card{
      margin: auto;
      max-width: 950px;
      width: 90%;
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 1rem;
      border: transparent;
  }
  @media(max-width:767px){
      .card{
          margin: 3vh auto;
      }
  }
  .cart{
      background-color: #fff;
      padding: 4vh 5vh;
      border-bottom-left-radius: 1rem;
      border-top-left-radius: 1rem;
  }
  @media(max-width:767px){
      .cart{
          padding: 4vh;
          border-bottom-left-radius: unset;
          border-top-right-radius: 1rem;
      }
  }
  .summary{
      background-color: #ddd;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      padding: 4vh;
      color: rgb(65, 65, 65);
  }
  @media(max-width:767px){
      .summary{
      border-top-right-radius: unset;
      border-bottom-left-radius: 1rem;
      }
  }
  .summary .col-2{
      padding: 0;
  }
  .summary .col-10
  {
      padding: 0;
  }.row{
      margin: 0;
  }
  .title b{
      font-size: 1.5rem;
  }
  .main{
      margin: 0;
      padding: 2vh 0;
      width: 100%;
  }
  .col-2, .col{
      padding: 0 1vh;
  }
  a{
      padding: 0 1vh;
  }
  .close{
      margin-left: auto;
      font-size: 0.7rem;
  }
  img{
      width: 3.5rem;
  }
  .back-to-shop{
      margin-top: 4.5rem;
  }
  h5{
      margin-top: 4vh;
  }
  hr{
      margin-top: 1.25rem;
  }
  form{
      padding: 2vh 0;
  }
  select{
      border: 1px solid rgba(0, 0, 0, 0.137);
      padding: 1.5vh 1vh;
      margin-bottom: 4vh;
      outline: none;
      width: 100%;
      background-color: rgb(247, 247, 247);
  }
  input{
      border: 1px solid rgba(0, 0, 0, 0.137);
      padding: 1vh;
      margin-bottom: 4vh;
      outline: none;
      width: 100%;
      background-color: rgb(247, 247, 247);
  }
  input:focus::-webkit-input-placeholder
  {
        color:transparent;
  }
  
  a{
      color: black; 
  }
  a:hover{
      
      text-decoration: none;
  }
  .totalprice {
    border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;
  }
   .btn-primary {
       background:#f4476b;
       border:none;
       border-radius:4px;
       padding:11px;
       box-shadow:none;
       margin-top:35px;
       text-shadow:none;
       outline:none !important;
     }
     
     .btn-primary:hover,  .btn-primary:active {
       background:#eb3b60;
     }
     
    .btn-primary:active {
       transform:translateY(1px);
     }
   #code{
      background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253) , rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
      background-repeat: no-repeat;
      background-position-x: 95%;
      background-position-y: center;
  }
  }`;
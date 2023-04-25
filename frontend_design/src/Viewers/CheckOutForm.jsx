import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from 'react-router-dom'
import CloseButton from 'react-bootstrap/CloseButton';

const CheckOutForm = () => {
  const [Fname, setFname] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Mobile, setMobileNO] = React.useState("");
  const [Address, setAddress] = React.useState("");
  // const [Totalprice, setTotalPrice] = React.useState("");
  // const [Finalprice, setFinalPrice] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);
  const [pcodes, setPincodess] = useState("");
  const [pcd, setPincd] = useState("");

  const param = useParams();
  const navigate = useNavigate()
  const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');
  const subtotal = cart.reduce((a, i) => a + i.qty * i.Pid[0].price, 0);

  const shipping = 20.00;
  const Totalprice = parseInt(param.id);
  const Finalprice = Totalprice + shipping
  useEffect(() => {

    if (param.id > 0.00) {
      getProducts();
      getpincode();
      getuser();
    }
    else {
      navigate("/Cart")
    }
  }, []);

  const getProducts = async () => {
    setLoading(true);
    let result = await fetch(`/api/cartgetbyid/${auth}`);
    result = await result.json();
    setCart(result);
    setLoading(false);
  };

  const getuser = async () => {
    setLoading(true);
    // console.log(`auth = ${auth}`);
    let userresult = await fetch(`/api/registerselectbyid/${auth}`);
    userresult = await userresult.json();
    setUser(userresult.result);
    setLoading(false);
    // console.log(user)
  }

  const Addorder = async () => {
    {
      auth ?
        checkout()
        :
        navigate("/Login");
    }
  }

  //Get pincode
  const getpincode = async () => {
    let results = await fetch("/api/pincodeActiveselect");
    results = await results.json();
    // return console.log(results.result);
    setPincodess(results.result);
  }

  const checkout = async () => {
    // return alert(`${auth} + 63d49dd764de40915d129891`)
    //if (!Address || !Totalprice || !Finalprice || !pcd) {
    if (!Address) {
      setError(true);
      return false;
    }

    let result = await fetch('/api/orderinsert', {
      method: 'post',
      body: JSON.stringify({
        Rid: auth, Address, Totalprice, Finalprice, pcd
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    navigate("/Productt")
    console.log(result);

    // }
  }
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
          <div className="card " style={{ marginBlock: "15px", marginTop: "60px" }} >
            <div className="row " >
              <div className="col-md-6 cart">
                {/* //jj */}
                {/* <div className="register-photo">
                  <div className="form-container"> */}
                <h2 className="text-center"><strong>CheckOut Form</strong></h2>
                <div className='form-group'>
                  <h4>01. Personal Details</h4></div>
                <div className="row">
                  <div className="col">
                    <div className="form-outline">
                      <label>Name</label>
                      <input type="text" className="form-control" placeholder={user.Fname + " " + user.Lname} onChange={(e) => setFname(e.target.value)} readOnly />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-outline">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder={user.Email} onChange={(e) => setEmail(e.target.value)} readOnly />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-outline">
                      <label>Number</label>
                      <input type="email" className="form-control" value={user.MobileNo} onChange={(e) => setMobileNO(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <h4 className='h4-sty'>02. Shipping Details</h4></div>
                <div class="row">
                  <div class="col">
                    <div class="form-outline">
                      <label>Address</label>
                      <textarea name="postContent" class="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} rows={4} cols={40} placeholder="Enter your address " />
                      {error && !Address && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out category field!</span>}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-outline" style={{ marginTop: "10px" }}>
                      <select className="form-control" onChange={(e) => setPincd(e.target.value)}>
                        <option value={0}>----Select Pincode----</option>
                        {
                          pcodes.length > 0 ? pcodes.map((item, index) => (
                            <option key={item._id} value={item._id}>{item.pcode}</option>
                          ))
                            : <option value={0}>No Records Founds!</option>
                        }
                      </select>
                    </div>
                  </div>

                </div>
                {/*<div className='form-group'>
                  <h5 className='h4-sty'>Shipping Cost</h5>
                </div>
                 <div className="row">
                  <div className="col">
                    <div className="btn" style={{ width: "155px" }}>
                      <div className='p-3 card '>
                        <button value={shipping} onChange={(e) => { setShipping(200) }}>
                        <div>
                          <h4 style={{ color: "#f4476b", marginBottom: "10px" }}>Fast Delivery</h4>
                          <button className='p-sty'>Cost : Rs.200</button>
                        </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="btn" style={{ width: "155px" }}>
                      <div className='p-3 card '>
                        <div>
                          <h4 style={{ color: "#f4476b", marginBottom: "10px" }}>Late Delivery</h4>
                          <h5 className='p-sty'>Cost : Rs.70</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

              </div>
              {/* </div>
              </div> */}
              <div className="col-md-6 summary">
                <h2 className="text-center"><strong>Order Summary</strong></h2>
                <div className="text-center ">
                  {/* <h2 className="">No Item Added Yet!</h2> */}
                  {cart.map((item, index) =>
                    <div className="row border-top bg-light border" key={index}>
                      <div className="row main align-items-center" style={{ fontSize: "10px" }}>
                        <div className="col-4">
                          <img src={`http://localhost:8000/${item.Pid[0].pimg}`} alt="loading" style={{ width: "6.5rem" }} />
                        </div>
                        <div className="col">
                          <div className="row text-muted">{item.Pid[0].subid[0].sname}</div>
                          <div className="row">{item.Pid[0].pname}</div>
                          <div className="row">Qty : {item.qty}</div>
                          <div className="row" style={{ fontWeight: "bold", fontSize: "12px" }} >Rs. {item.qty * item.Pid[0].price}</div>
                        </div>
                        {/* <div className="col" style={{ marginLeft: "14px" }}>Rs. {item.qty * item.Pid[0].price}</div> */}
                      </div>
                    </div>

                  )}
                </div>

                <div className="row" style={{ marginTop: "50px" }}>
                  <div className="row mt-4" >
                    <div className="col"> Subtotal : </div>
                    <div className="col text-right" >Rs.{Totalprice}</div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">Shipping Cost :</div>
                    <div className="col text-right" >Rs.{shipping}</div>
                  </div>
                  <div className="row mt-4">
                    <div className="col ">Discount :</div>
                    <div className="col text-right">0%</div>
                  </div>

                  <div className="totalprice row mt-4 ">
                    <div className="col">TOTAL PRICE :</div>
                    <div className="col text-right" >Rs.{Finalprice}</div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-8">
                    <div className="form-group">
                      <button className="btn btn-primary btn-block " onClick={Addorder} >Payment Process</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </>
    )
  }

  return (
    <div>
      <div>

      </div>

      <div className='row justify-content-center'>
        {loading ? <Loading /> : <Showcart />}

      </div>
    </div >
  )
}

export default CheckOutForm;

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
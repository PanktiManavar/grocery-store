import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link, useNavigate, useParams } from 'react-router-dom';

const CheckOutForm = () => {

  const [Fname, setFname] = React.useState("");
  const [Lname, setLname] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [TotalPrice, setTotalPrice] = React.useState("");
  const [FinalPrice, setFinalPrice] = React.useState("");

  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">

            <form method="post">
              <h2 className="text-center"><strong>CheckOut</strong> Form.</h2>
              <div className='form-group'>
                <h4>01. Personal Details</h4></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" placeholder="First Name" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" placeholder="Last Name" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="email" class="form-control" placeholder='Email' />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" class="form-control" placeholder='Pincode Number' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <h4>02. Shipping Details</h4></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="email" class="form-control" placeholder='Email' />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" class="form-control" placeholder='Pincode Number' />
                  </div>
                </div>
              </div>

              {/* <a href="/Signin" className="already">You don't have an account? Signup here.</a> */}
            </form>
            <div className="image-holder"></div>
          </div>
        </div>

      </FormContainer>
    </>
  );
};

export default CheckOutForm;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
     margin-top:30px;
   }
   

   .register-photo .image-holder {
     display:table-cell;
     width:350px;
     height:100px;
     background:url(image/loginimg.jpg);
     background-size:cover;
   }
   
   .register-photo .form-container {
     display:table;
     max-width:900px;
     width:90%;
     margin:0 auto;
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
     margin-top:35px;
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
import React from 'react';
import styled from "styled-components";
// import { useNavigate } from 'react-router-dom';

const AddDeliverBoy = () => {

  const [Fname, setFName] = React.useState("");
  const [Lname, setLName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [MobileNo, setMobileNo] = React.useState("");
  const UserType = "deliveryboy"
  // const navigate = useNavigate();

  const collectData = async (e) => {
    console.warn(Fname, Lname, Email, Address, Password, MobileNo, UserType);
    let result = await fetch('api/registration', {
      method: 'post',
      body: JSON.stringify({
        Fname,
        Lname,
        Email,
        Address,
        Password,
        MobileNo,
        UserType
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    console.warn(result);

    if (!result.Email) {
      localStorage.setItem("user", JSON.stringify(result));
      console.warn(result);
      alert("Welcome");
      // navigate('/Home/AdminHome');
    }
    else {
      alert("User could not be registered");
      // navigate('/Home');
    }
  }

  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form >
              <h2 className="text-center"><strong>Add</strong> Delivery Boy.</h2>
              <div className="form-group">
                <input className="form-control" type="text" value={Fname} onChange={(e) => setFName(e.target.value)} placeholder="Delivery Boy First Name" />
              </div>

              <div className="form-group">
                <input className="form-control" type="text" value={Lname} onChange={(e) => setLName(e.target.value)} placeholder="Delivery Boy Last Name" />
              </div>

              <div className="form-group">
                <textarea className="form-control" type="text" value={Address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery Boy Address" />
              </div>

              <div className="form-group">
                <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Delivery Boy Email" />
              </div>

              <div className="form-group">
                <input className="form-control" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Delivery Boy Password" />
              </div>

              <div className="form-group">
                <input className="form-control" type="tel" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Delivery Boy Mobile Number" />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={collectData}>Add Deliver Boy</button>
              </div>
              {/* <a href="/Signin" className="already">You don't have an account? Signup here.</a> */}
            </form>
          </div>
        </div>
      </FormContainer>
    </>
  );
};

export default AddDeliverBoy;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
     margin-top:30px;
   }
   
   .register-photo .image-holder {
     display:table-cell;
     width:auto;
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
   .radio-contarol{
    background:#f7f9fc;
    margin-top:10px;
     font-size:14px;
     
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

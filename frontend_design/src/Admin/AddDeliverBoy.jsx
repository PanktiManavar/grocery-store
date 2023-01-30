import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const AddDeliverBoy = () => {

  const [Fname, setFName] = React.useState("");
  const [Lname, setLName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Address, setAddress] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [MobileNo, setMobileNo] = React.useState("");
  const [error, setError] = React.useState(false);
  const [Fnameerror, setFnameError] = React.useState('');
  const [Lnameerror, setLnameError] = React.useState('');
  const [Emailerror, setEmailError] = React.useState("");
  const [Passworderror, setPasswordError] = React.useState("");
  const [MobileNoerror, setMobileNoError] = React.useState("");
  const UserType = "deliveryboy"
  const navigate = useNavigate();

  const collectData = async (e) => {
    e.preventDefault();
    if (!Fname || !Lname || !Email || !Password || !MobileNo || !UserType) {
      setError(true);
      return false;
    }

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
      navigate('/SelectDeliverBoy');
    }
    else {
      alert("User could not be registered");
      // navigate('/Home');
    }
  };

  //Validate FirstName
  const validFirstName = (e) => {
    var pattern = new RegExp(/[A-Za-z]+/);
    if (!pattern.test(Fname)) {
      setFnameError('Please Enter Valid Fitstname!');
      return;
    } else {
      setFnameError('');
    }
  };

  //Validate LastName
  const validLastName = (e) => {
    var pattern = new RegExp(/[A-Za-z]+/);
    if (!pattern.test(Lname)) {
      setLnameError('Please Enter Valid Lastname!');
      return;
    } else {
      setLnameError('');
    }
  };

  //Validate MobileNo
  const validMobileNo = (e) => {
    var pattern = new RegExp(/^[789]\d{8}$/);
    if (!pattern.test(MobileNo)) {
      setMobileNoError('Only 10 numbers are allowed!');
      return;
    } else {
      setMobileNoError('');
    }
  };

  //Validate Password
  const validPassword = (e) => {
    var pattern = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
    );
    if (!pattern.test(Password)) {
      setPasswordError(
        'Only 8 characters are allowed, include 1 number,1 uppercase and lowercase letter and 1 special character!'
      );
      return;
    } else {
      setPasswordError('');
    }
  };

  //Validate Email
  const validEmail = (e) => {
    var pattern = new RegExp(/^[\w#][\w\.\’+#](.[\w\\’#]+)\@[a-zA-Z0-9]+(.[a-zA-Z0-9]+)*(.[a-zA-Z]{2,20})$/);
    if (!pattern.test(Email)) {
      setEmailError('Please enter valid Email!');
      return;
    } else {
      setEmailError('');
    }
  };

  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form >
              <h2 className="text-center"><strong>Add</strong> Delivery Boy.</h2>
              <div className="form-group">
                <input className="form-control" type="text" value={Fname} onChange={(e) => { setFName(e.target.value); validFirstName(); }} placeholder="Delivery Boy First Name" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {Fnameerror}  </span>
                {error && !Fname && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}</div>

              <div className="form-group">
                <input className="form-control" type="text" value={Lname} onChange={(e) => { setLName(e.target.value); validLastName(); }} placeholder="Delivery Boy Last Name" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {Lnameerror}  </span>
                {error && !Lname && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}</div>

              <div className="form-group">
                <textarea className="form-control" type="text" value={Address} onChange={(e) => { setAddress(e.target.value) }} placeholder="Delivery Boy Address" />
                {error && !Address && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}</div>

              <div className="form-group">
                <input className="form-control" type="email" value={Email} onChange={(e) => { setEmail(e.target.value); validEmail(); }} placeholder="Delivery Boy Email" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {Emailerror}  </span>
                {error && !Email && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}</div>

              <div className="form-group">
                <input className="form-control" type="password" value={Password} onChange={(e) => { setPassword(e.target.value); validPassword(); }} placeholder="Delivery Boy Password" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {Passworderror}  </span>
                {error && !Password && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}</div>

              <div className="form-group">
                <input className="form-control" type="tel" value={MobileNo} onChange={(e) => { setMobileNo(e.target.value); validMobileNo(); }} placeholder="Delivery Boy Mobile Number" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {MobileNoerror}  </span>
                {error && !MobileNo && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}</div>

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

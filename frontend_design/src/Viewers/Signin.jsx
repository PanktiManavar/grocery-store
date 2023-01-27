import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const [Fname, setFName] = React.useState("");
  const [Lname, setLName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [MobileNo, setMobileNo] = React.useState("");
  const [Otp, setOtp] = React.useState('');
  const [error, setError] = React.useState(false);
  const UserType = "customer"
  const navigate = useNavigate();


  const OTPsend = async (e) => {
    e.preventDefault();
    if (!Email) {
      setError(true);
      return false;
    }
    let result = await fetch('api/optsendRgister', {
      method: 'post',
      body: JSON.stringify({ Email }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();

    if (result.error) {
      alert(result.error)
    }
    else {
      if (result) {
        sessionStorage.setItem("otp", JSON.stringify(result.OTP));
      }
      else {
        alert("Resend Otp")
      }
    }
    console.warn(result);
  }
  var otps = sessionStorage.getItem("otp");

  const collectData = async (e) => {
    e.preventDefault();
    if (!Fname || !Lname || !Email || !Password || !MobileNo || !UserType || !Otp) {
      setError(true);
      return false;
    }
    console.warn(Fname, Lname, Email, Password, MobileNo, UserType);

    if (otps === Otp) {
      let result = await fetch('api/registration', {
        method: 'post',
        body: JSON.stringify({
          Fname, Lname, Email, Password, MobileNo, UserType
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
        navigate('/Login');
      }
      else {
        alert("User could not be registered");
        // navigate('/Home');
      }
    }
  }

  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            <div className="image-holder">
            </div>
            <form >
              <h2 className="text-center"><strong>Create</strong> an account.</h2>
              <div className="form-group">
                <input className="form-control" type="text" value={Fname} onChange={(e) => setFName(e.target.value)} placeholder="First Name" />
                {error && !Fname && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out First Name field!</span>}
              </div>
              <div className="form-group">
                <input className="form-control" type="text" value={Lname} onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
                {error && !Lname && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Last Name field!</span>}

              </div>
              <div className="form-group">
                <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                {error && !Email && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Email field!</span>}

              </div>
              <div className="form-group">
                <input className="form-control" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {error && !Password && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Password field!</span>}

              </div>
              <div className="form-group">
                <input className="form-control" type="tel" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile Number" />
                {error && !MobileNo && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Mobile Number field!</span>}
              </div>
              <div className="form-group">
                <button className="btn btn-success btn-block btn-m" onClick={OTPsend}>SEND OTP</button>
              </div>
              <div className="form-group">
                <input className="form-control" type="Number" value={Otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
                {error && !Otp && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Enter OTP !</span>}
              </div>
              <button className="btn btn-primary btn-block" onClick={collectData}>Signin</button>

              <a href="/Login" className="already">You have already account? Login here.</a>
            </form>
          </div>
        </div>

      </FormContainer>
    </>
  );
};

export default Signin;

const FormContainer = styled.div`{
  .register-photo {
    background:#f1f7fc;
    padding:80px 0;
  }
  .btn-m{
    margin-top:5px;
   }
  .register-photo .image-holder {
    display:table-cell;
    width:377px;
    background:url(image/rglg.jpg);
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
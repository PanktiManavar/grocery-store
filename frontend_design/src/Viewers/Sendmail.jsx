import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Sendmail = () => {
  const [Email, setEmail] = React.useState('');
  const [Otp, setOtp] = React.useState('');
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const OTPsend = async (e) => {
    e.preventDefault();
    if (!Email) {
      setError(true);
      return false;
    }
    let result = await fetch('api/optsend', {
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
        sessionStorage.setItem("uid", JSON.stringify(result.userid));
      }
      else {
        alert("Resend Otp")
      }
    }
    console.warn(result);
  }

  const passmatch = async (e) => {
    e.preventDefault();
    if (!Otp) {
      setError(true);
      return false;
    }
    var otp = sessionStorage.getItem("otp");
    // var uid = sessionStorage.getItem("uid");
    if (otp === Otp) {
      navigate('/ForgotPassword');
    }
    else {
      alert("Enter Valid Otp")
    }
  }


  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            <div className="image-holder"></div>
            <form>
              <h2 className="text-center"><strong>Verify</strong> Account.</h2>

              <div className="form-group">
                <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                {error && !Email && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Email field!</span>}
              </div>
              <div className="form-group">
                <button className="btn btn-success btn-block btn-m" onClick={OTPsend}>SEND OTP</button>
              </div>
              <div className="form-group">
                <input className="form-control" type="Number" value={Otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
                {error && !Otp && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Enter OTP !</span>}
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={passmatch}>Verify Otp</button>
              </div>
            </form>
          </div>
        </div>
      </FormContainer>
    </>
  )
}

export default Sendmail;

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
     width:150px;
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
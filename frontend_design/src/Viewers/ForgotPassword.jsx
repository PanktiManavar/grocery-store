import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const [Password, setPassword] = React.useState('');
  const [ConPassword, setConPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const [Passworderror, setPasswordError] = React.useState('');
  const navigate = useNavigate();

  var uid = sessionStorage.getItem("uid").replace(/['"]+/g, '');

  // Email = param.id;
  const UpdatePassword = async (e) => {
    e.preventDefault();
    if (!Password || !ConPassword) {
      setError(true);
      return false;
    }

    if (Password === ConPassword) {
      // return alert("hellllo i am enter ");

      let result = await fetch(`forgotpassword/${uid}`, {
        method: 'put',
        body: JSON.stringify({ Password }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      result = await result.json();

      if (result.error) {
        alert(result.error);
      }
      else {
        if (result) {
          alert("Password are update successfully ")
          navigate("/Login");
        }
        else {
          alert("Please try again, some problem to update password ");
        }
      }
    }
    else {
      alert("Enter valid Password ")
    }

  }

  //Validate Password
  const validPassword = (e) => {
    var pattern = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/
    );
    if (!pattern.test(Password)) {
      setPasswordError(
        'Only 8 characters are allowed, include 1 number,1 uppercase and lowercase letter and 1 special character!'
      );
      return false;
    } else {
      setPasswordError('');
    }
  };
  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form>
              <h2 className="text-center"><strong>Change</strong> Password.</h2>


              <div className="form-group">
                <input className="form-control" type="password" value={Password} onChange={(e) => { setPassword(e.target.value); validPassword(); }} placeholder="Password" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {Passworderror}  </span>
                {error && !Password && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Password field!</span>}
              </div>
              <div className="form-group">
                <input className="form-control" type="password" value={ConPassword} onChange={(e) => setConPassword(e.target.value)} placeholder="Conform Password" />
                {error && !ConPassword && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Conform Password field!</span>}
              </div>
              <div className="form-group">
                {/* <button className="btn btn-primary btn-block">Change Password</button> */}
                <button className="btn btn-primary btn-block" onClick={UpdatePassword}>Change Password</button>
              </div>
            </form>
          </div>
        </div>
      </FormContainer>
    </>
  );
};

export default ForgotPassword;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
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
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // console.warn("email,password", email, password);
    e.preventDefault();
    if (!Email || !Password) {
      setError(true);
      return false;
    }

    let result = await fetch('api/loging', {
      method: 'post',
      body: JSON.stringify({ Email, Password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    result = await result.json();
    // return console.log(result);

    if (result.error) {
      alert(result.error)
    }

    if (result.response.data.Email === Email) {

      if (result.response.data.Status === "Active") {

        if (result.response.data.UserType === "Admin") {
          sessionStorage.setItem("role", JSON.stringify("Admin"));
          sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));
          sessionStorage.setItem("userid", JSON.stringify(result.response.data._id));

          alert(" Welcome Admin");
          navigate("/AdminHome");
        }
        else if (result.response.data.UserType === "customer") {

          sessionStorage.setItem("userid", JSON.stringify(result.response.data._id));
          sessionStorage.setItem("role", JSON.stringify("customer"));
          sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));

          alert("Welcome User");
          // navigate('/Home')
          navigate('/Homee')
        }
        else if (result.response.data.UserType === "deliveryboy") {

          sessionStorage.setItem("user", JSON.stringify(result.response.data));
          sessionStorage.setItem("role", JSON.stringify("deliveryboy"));
          sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));
          alert("delivery boy wl");
        }
      }
      else {
        alert("Your status is deactive right now so you can not Login!!")
      }
    }
    else {

      alert("Please enter correct details user not found");
      navigate("/Login")
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
              <h2 className="text-center"><strong>Login</strong> your account.</h2>

              <div className="form-group">
                <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                {error && !Email && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Email field!</span>}
              </div>
              <div className="form-group">
                <input className="form-control" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {error && !Password && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Password field!</span>}
              </div>
              {/* <div className="form-group"> */}
              <button className="btn btn-primary btn-block" onClick={handleLogin}>Login</button>
              {/* <button className="btn btn-primary btn-block" type="submit" onClick={collectData}>Sign Up</button> */}
              {/* </div> */}
              <a href="/Signin" className="already">You don't have an account? Signup here.</a>
              <span className="already"><Link to="/sendmail" >Forgot Password</Link></span>
            </form>
          </div>
        </div>

      </FormContainer>
    </>
  );
};

export default Login;

const FormContainer = styled.div`{
  .register-photo {
    background:#f1f7fc;
    padding:80px 0;
  }
  
  .register-photo .image-holder {
    display:table-cell;
    width: 189px;
    height: 367px;
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
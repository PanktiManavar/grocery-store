import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // console.warn("email,password", email, password);

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
    // return console.log(result.response.data.Email);

    if (result.response.data.Email) {

      if (result.response.data.Status === "Active") {

        if (result.response.data.UserType === "Admin") {

          sessionStorage.setItem("user", JSON.stringify(result.response.data));
          sessionStorage.setItem("role", JSON.stringify("Admin"));
          sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));

          alert(" Welcome Admin");
          navigate("/AdminHome");
        }
        else if (result.response.data.UserType === "customer") {

          sessionStorage.setItem("user", JSON.stringify(result.response.data));
          sessionStorage.setItem("role", JSON.stringify("customer"));
          sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));

          alert("Welcome User");
          // navigate('/Home')
          navigate('/Home')
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

      alert("Please enter correct details/user not found");
      navigate("/Signin")
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
              <span className="already"><Link to="/Signin" >Forgot Password</Link></span>
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
  height:350px;
  width:150px;
  background:url(image/rglg.jpg);
  background-size:cover;
}

.register-photo .form-container {
  display:table;
  max-width:900px;
  width:90%;
  margin: 60px 50px 10px 250px;
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

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {

//   const [Email, setEmail] = React.useState('');
//   const [Password, setPassword] = React.useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     // console.warn("email,password", email, password);

//     let result = await fetch('api/loging', {
//       method: 'post',
//       body: JSON.stringify({ Email, Password }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     result = await result.json();
//     // return console.log(result.response.data.Email);

//     if (result.response.data.Email) {

//       if (result.response.data.Status === "Active") {

//         if (result.response.data.UserType === "Admin") {

//           sessionStorage.setItem("user", JSON.stringify(result.response.data));
//           sessionStorage.setItem("token", JSON.stringify(result.response.token));
//           sessionStorage.setItem("role", JSON.stringify("Admin"));
//           sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));

//           alert(" Welcome Admin");
//           navigate("/AdminHome");
//         }
//         else if (result.response.data.UserType === "customer") {

//           sessionStorage.setItem("user", JSON.stringify(result.response.data));
//           sessionStorage.setItem("token", JSON.stringify(result.response.token));
//           sessionStorage.setItem("role", JSON.stringify("customer"));
//           sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));

//           alert("Welcome User");
//           // navigate('/Home')
//           navigate('/Home')
//         }
//         else if (result.response.data.UserType === "deliveryboy") {

//           sessionStorage.setItem("user", JSON.stringify(result.response.data));
//           sessionStorage.setItem("token", JSON.stringify(result.response.token));
//           sessionStorage.setItem("role", JSON.stringify("deliveryboy"));
//           sessionStorage.setItem("Email", JSON.stringify(result.response.data.Email));
//           alert("delivery boy wl");
//         }
//       }
//       else {
//         alert("Your status is deactive right now so you can not Login!!")
//       }
//     }
//     else {

//       alert("Please enter correct details/user not found");
//       navigate("/Signin")
//     }
//   }

//   return (
//     <>
//       <FormContainer>
//         <div className="main_box">
//           <div className="main_box--main">
//             <div className="main_box--main--title">
//               <h4>Login To Shop Your Grocery</h4>
//               <p>Enter your username and password</p>
//             </div>
//             <div className="main_box--main--login">
//               <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your username" />
//               <input className="form-control" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
//               <button className="btn btn-success" onClick={handleLogin}>Login</button>
//               <span>
//                 Don't have account?<Link to="/Signin" > Create Account</Link>
//               </span><br />
//               <span><Link to="/Signin" >
//                 ForgotPassword</Link>
//               </span>
//             </div>
//           </div>
//         </div>
//       </FormContainer>
//     </>
//   );
// };

// export default Login;

// const FormContainer = styled.div`{
//    .main_box{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh;
// }

// /* Main */
// .main_box--main{
//   width: 500px;
//   height: auto;
//   position: relative;
//   border-radius: 7.5px;
//   box-shadow: 0px 0px 25px rgba(0,0,0,.35);
// }
// .main_box--main--title{
//   width: 100%;
//   height: 100px;
//   background: rgb(250,250,250);
//   padding: 20px;
//   border-radius: 7.5px 7.5px 0px 0px  ;
// }
// .main_box--main--login{
//   padding: 20px;
//   width: 100%;
//   height: 210px;
//   background: rgb(200, 200, 200);
//   box-shadow: inset 0px 5px 5px rgba(0,0,0,.15);
//   border-radius: 0px 0px 7.5px 7.5px;
//   text-align: center;
// }
// .main_box--main--signUp{
//   padding: 20px;
//   width: 100%;
//   height: 250px;
//   background: rgb(200, 200, 200);
//   box-shadow: inset 0px 5px 5px rgba(0,0,0,.15);
//   border-radius: 0px 0px 7.5px 7.5px;
// }
// .main_box--main--login input,
// .main_box--main--signUp input{
//   margin: 10px 0px ;
//   box-shadow: 0px 0px 10px rgba(0,0,0,.25);
// }
// .main_box--main--login button,
// .main_box--main--signUp button{
//   margin: 10px 0px;
//   box-shadow: 0px 0px 10px rgba(0,0,0,.25);
//   padding: 7.5px;
//   width: 100%;
//   cursor: pointer;
// }
// .main_box--main--login span {
//     color: black;
//     text-transform: uppercase;
//     a {
//       color: #4e0eff;
//       text-decoration: none;
//       font-weight: bold;
//     }
// }
// }
// `;
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const [Fname, setFName] = React.useState("");
  const [Lname, setLName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [MobileNo, setMobileNo] = React.useState("");
  const UserType = "customer"
  const navigate = useNavigate();

  const collectData = async (e) => {
    console.warn(Fname, Lname, Email, Password, MobileNo,UserType);
    let result = await fetch('api/registration', {
      method: 'post',
      body: JSON.stringify({
        Fname,
        Lname,
        Email,
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
      navigate('/Home');
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
            <div className="image-holder">
            </div>
            <form >
              <h2 className="text-center"><strong>Create</strong> an account.</h2>
              <div className="form-group">
                <input className="form-control" type="text" value={Fname} onChange={(e) => setFName(e.target.value)} placeholder="First Name" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" value={Lname} onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              </div>
              <div className="form-group">
                <input className="form-control" type="tel" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Mobile Number" />
              </div>
              {/* <div className="form-group"> */}
              <button className="btn btn-primary btn-block" onClick={collectData}>Signin</button>
              {/* <button className="btn btn-primary btn-block" type="submit" onClick={collectData}>Sign Up</button> */}
              {/* </div> */}
              {/* <a href="/Signin" className="already">You don't have an account? Signup here.</a> */}
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
 
 .register-photo .image-holder {
   display:table-cell;
   height:100px;
   width:250px;
   background:url(image/rglg.jpg);
   background-size:cover;
 }
 
 .register-photo .form-container {
   display:table;
   max-width:900px;
   width:90%;
   margin: 25px 50px 75px 250px;
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
   margin-top:8px;
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

//  import React from "react";
//  import styled from "styled-components";
//  import { useNavigate } from 'react-router-dom';
 
//  const Signin = () => {
 
//    const [Fname, setFName] = React.useState("");
//    const [Lname, setLName] = React.useState("");
//    const [Email, setEmail] = React.useState("");
//    const [Password, setPassword] = React.useState("");
//    const [MobileNo, setMobileNo] = React.useState("");
//    // const [UserType, setUserType] = React.useState("");
//    const navigate = useNavigate();
 
//    const collectData = async (e) => {
//      console.warn(Fname, Lname, Email, Password, MobileNo);
//      let result = await fetch('api/registration', {
//        method: 'post',
//        body: JSON.stringify({
//          Fname,
//          Lname,
//          Email,
//          Password,
//          MobileNo,
//          // UserType
//        }),
//        headers: {
//          "Content-Type": "application/json"
//        },
//      });
//      result = await result.json();
//      console.warn(result);
 
//      if (!result.Email) {
//        localStorage.setItem("user", JSON.stringify(result));
//        console.warn(result);
//        alert("Welcome");
//        navigate('/Home')
//      }
//      else {
//        alert("User could not be registered");
//      }
//    }
 
//    return (
//      <>
//        <FormContainer>
 
//          <div className="main_box">
//            <div className="main_box--main">
//              <div className="main_box--main--title">
//                <h4>Signin To Shop Now...</h4>
//                <p>Enter your details</p>
//              </div>
//              <div className="main_box--main--signUp">
//                <input className="form-control" type="text" value={Fname} onChange={(e) => setFName(e.target.value)} placeholder="Enter your first name" />
//                <input className="form-control" type="text" value={Lname} onChange={(e) => setLName(e.target.value)} placeholder="Enter your last name" />
//                <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
//                <input className="form-control" type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
//                <input className="form-control" type="tel" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="Enter your contact number" />
//                {/* <input className="form-control" type="text" value={UserType} onChange={(e) => setUserType(e.target.value)} placeholder="customer" /> */}
//                <button className="btn btn-success" onClick={collectData}>Signin</button>
 
//              </div>
//            </div>
//          </div>
//        </FormContainer>
//      </>
//    );
//  };
 
//  export default Signin;
 
//  const FormContainer = styled.div`{
//          .main_box{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         height: 100vh;
//       }
//       /* Main */
//       .main_box--main{
//         width: 500px;
//         height: auto;
//         position: relative;
//         border-radius: 7.5px;
//         box-shadow: 0px 0px 25px rgba(0,0,0,.35);
//       }
//       .main_box--main--title{
//         width: 100%;
//         height: 100px;
//         background: rgb(250,250,250);
//         padding: 20px;
//         border-radius: 7.5px 7.5px 0px 0px  ;
//       }
//       .main_box--main--login{
//         padding: 20px;
//         width: 100%;
//         height: 210px;
//         background: rgb(200, 200, 200);
//         box-shadow: inset 0px 5px 5px rgba(0,0,0,.15); 
//         border-radius: 0px 0px 7.5px 7.5px;
//         text-align: center;
//       }
//       .main_box--main--signUp{
//         padding: 20px;
//         width: 100%;
//         height: 250px;
//         background: rgb(200, 200, 200);
//         box-shadow: inset 0px 5px 5px rgba(0,0,0,.15); 
//         border-radius: 0px 0px 7.5px 7.5px;
//       }
//       .main_box--main--login input,
//       .main_box--main--signUp input{
//         margin: 10px 0px ;
//         box-shadow: 0px 0px 10px rgba(0,0,0,.25);
//       }
//       .main_box--main--login button,
//       .main_box--main--signUp button{
//         margin: 10px 0px;
//         box-shadow: 0px 0px 10px rgba(0,0,0,.25);
//         padding: 7.5px;
//         width: 100%;
//         cursor: pointer;
//       }
//       .main_box--main--login span {
//           color: black;
//           text-transform: uppercase;
//           a {
//             color: #4e0eff;
//             text-decoration: none;
//             font-weight: bold;
//           }
//       }
//      }
//  `;
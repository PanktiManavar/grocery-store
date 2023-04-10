import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineUnorderedList, AiOutlineSetting, AiOutlineUnlock, AiOutlineLogout } from "react-icons/ai"
import "./Myaccount.css"

const Changepassword = () => {

  const [Password, setPassword] = React.useState('');
  const [OldPassword, setOldPassword] = React.useState('');
  const [ConPassword, setConPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const userid = sessionStorage.getItem("userid").replace(/['"]+/g, '');

  const logout = () => {
    sessionStorage.clear();
    navigate("/Login");
  }

  const UpdatePassword = async (e) => {
    e.preventDefault();

    // return alert(`/api/updatepassword/ ${userid}`);
    if (!Password || !OldPassword || !ConPassword) {
      setError(true);
      return false;
    }

    if (Password === ConPassword) {
      let result = await fetch(`/api/updatepassword/${userid}`, {
        method: 'put',
        body: JSON.stringify({ OldPassword, Password }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      result = await result.json();

      if (result.error) {
        alert(result.error);
      } else {
        if (result) {
          alert("Password Update successFully");
          navigate('/Homee');

        }
        else {
          alert("Password not Updateted !!");
        }
      }
    }
    else {
      alert("New Password and Confirm Password are enter same!!");
    }
  }
  return (
    <>
      <div className='bg-gray-50' >
        <div className='mx-auto max-w-screen-2xl px-3 sm:px-10'>
          <div className="flex flex-row">

            <div className='bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32' style={{ margin: "30px 40px 45px 40px", width: "270px", height: "220px" }}> {/* margin: top right bottom left */}
              <div className="flex flex-col" style={{ justifyContent: 'center' }}>
                <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" href="/MyAccount">
                  <span><AiOutlineDashboard style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                  <span className="ml-2 text-xl font-medium">Dashboard</span>
                </a>
                <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" href="MyOrder">
                  <span><AiOutlineUnorderedList style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                  <span className="ml-2 text-xl font-medium">My Order</span>
                </a>
                <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600">
                  <span><AiOutlineSetting style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                  <span className="ml-2 text-xl font-medium">Update Profile</span>
                </a>
                <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" href="/Changepassword">
                  <span><AiOutlineUnlock style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                  <span className="ml-2 text-xl font-medium">Change Password</span>
                </a>
                <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" href="/Login" onClick={logout} >
                  <span><AiOutlineLogout style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                  <span className="ml-2 text-xl font-medium">Logout</span>
                </a>
              </div>
            </div>


            <div className='col w-full bg-white mt-5 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden' style={{ margin: "40px 30px 45px 0" }}>
              <div className='overflow-hidden' >
                <h2 className='text-xl font-serif font-semibold mb-5' style={{ fontSize: "15px" }}>Change Password</h2>
                <div className='max-w-screen-2xl mx-auto'>
                  <div className='rounded-md font-serif'>
                    <div className='flex flex-col'>
                      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                          <div class="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                            <FormContainer>
                              <div className="row">
                                <div className="col">
                                  <div className="form-outline">
                                    <label style={{ fontSize: "12px", marginTop: "10px" }}>Current Password</label>
                                    <input className="form-control" type="password" value={OldPassword} style={{ padding: "10px" }} onChange={(e) => setOldPassword(e.target.value)} placeholder="Enter Current Password" />
                                    {error && !OldPassword && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Old-Password field!</span>}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-outline">
                                    <label style={{ fontSize: "12px", marginTop: "20px" }}>New Password</label>
                                    <input className="form-control" type="password" value={Password} style={{ padding: "10px" }} onChange={(e) => setPassword(e.target.value)} placeholder="Enter New Password" />
                                    {error && !Password && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out New-Password field!</span>}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-outline">
                                    <label style={{ fontSize: "12px", marginTop: "20px" }}>Conform Password</label>
                                    <input className="form-control" type="password" style={{ padding: "10px" }} value={ConPassword} onChange={(e) => setConPassword(e.target.value)} placeholder="Enter Conform Password" />
                                    {error && !ConPassword && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out Confirm-Password field!</span>}
                                  </div>
                                </div>
                              </div>
                              <div className="row" style={{ textAlign: "right" }}>
                                <div className="col">
                                  <div className="form-outline">
                                    <button className="btn btn-block" onClick={UpdatePassword} style={{ backgroundColor: "rgb(17, 156, 114)", color: "white", marginTop: "20px", padding: "10px" }}>Change Password</button>
                                  </div>
                                </div>
                              </div>

                            </FormContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* </FormContainer> */}
    </>
  )
}

export default Changepassword;

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
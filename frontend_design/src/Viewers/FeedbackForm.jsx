import React, { useState, useEffect } from "react";
import "./Myaccount.css"
import { AiOutlineDashboard, AiOutlineUnorderedList, AiOutlineSetting, AiOutlineUnlock, AiOutlineLogout } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { MdOutlineFeedback } from 'react-icons/md';
import swal from "sweetalert"
import styled from "styled-components";

const FeedbackForm = () => {
    const [order, setOrder] = useState([]);
    const [comment, setComment] = useState('');
    const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');

    const navigate = useNavigate()

    const Feedback = async () => {
        let result = await fetch("/api/feedbackinsert", {
            method: "post",
            body: JSON.stringify({
                Rid: auth,
                comment
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        result = await result.json();
        if (result) {
            swal({
                title: "Feedback !",
                text: "Your Feedback are submit !!!",
                icon: "success",
                button: "Okay!",
            });
            navigate('/MyOrder');

        }
        else {
            alert("Feedback are not submit");
        }
    }

    const logout = () => {
        sessionStorage.clear();
        navigate("/Login");
    }

    return (
        <div className='bg-gray-50' >
            <div className='mx-auto max-w-screen-2xl px-3 sm:px-10'>
                <div className="flex flex-row">

                    <div className='bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32' style={{ margin: "30px 40px 45px 40px", width: "270px", height: "260px" }}> {/* margin: top right bottom left */}
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
                            <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" onClick={logout}>
                                <span><AiOutlineLogout style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                                <span className="ml-2 text-xl font-medium">Logout</span>
                            </a>
                            <a className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 hover:text-emerald-600" onClick={logout}>
                                <span><MdOutlineFeedback style={{ padding: 0, fontSize: 16, marginLeft: "10px" }} /></span>
                                <span className="ml-2 text-xl font-medium">Feedback</span>
                            </a>
                        </div>
                    </div>

                    <div className='col w-full bg-white mt-5 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden' style={{ margin: "40px 30px 45px 0" }}>
                        <div className='overflow-hidden' >
                            <h2 className='text-xl font-serif font-semibold mb-5' style={{ fontSize: "15px" }}>Feedback Form</h2>
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
                                                                    <label style={{ fontSize: "12px", marginTop: "10px" }}>Comment</label>
                                                                    {/* <input className="form-control" type="text" value={comment} style={{ padding: "10px" }} onChange={(e) => setComment(e.target.value)} placeholder="Enter Current Comment" /> */}
                                                                    <textarea className="form-control" name="postContent" rows={5} cols={40} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Enter Your Comment here" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{ textAlign: "right" }}>
                                                            <div className="col">
                                                                <div className="form-outline">
                                                                    <button className="btn btn-block" onClick={Feedback} style={{ backgroundColor: "rgb(17, 156, 114)", color: "white", marginTop: "20px", padding: "10px" }}>Submit</button>
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
    )
}

export default FeedbackForm;

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
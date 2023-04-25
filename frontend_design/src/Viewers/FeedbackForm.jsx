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
        <FormContainer>
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
                                                <div class="">
                                                    <div class="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">

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
        </FormContainer>
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

   --------------------------------------------------------------------------------------------------
   @media (min-width: 1024px) {
    .lg\:w-80 {
        width: 20rem;
    }
}

@media (min-width: 1024px) {
    .lg\:mr-10 {
        margin-right: 2.5rem;
    }
}

.flex-shrink-0 {
    flex-shrink: 0;
}

.w-full {
    width: 100%;
}

.mr-7 {
    margin-right: 1.75rem;
}

.bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251/var(--tw-bg-opacity));
}

@media (min-width: 640px) {
    .sm\:px-10 {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
}

.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}

.max-w-screen-2xl {
    max-width: 1536px;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 1024px) {
    .lg\:py-12 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
}

@media (min-width: 1024px) {
    .lg\:flex-row {
        flex-direction: row;
    }
}

.py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

.flex-col {
    flex-direction: column;
}


.flex {
    display: flex;
}

@media (min-width: 1024px) {
    .lg\:p-8 {
        padding: 2rem;
    }
}

@media (min-width: 640px) {
    .sm\:p-5 {
        padding: 1.25rem;
    }
}

.p-4 {
    padding: 1rem;
}

.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
}

.rounded-md {
    border-radius: 0.375rem;
}

.top-32 {
    top: 8rem;
}

.sticky {
    position: sticky;
}

.p-2 {
    padding: 0.5rem;
}

.my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

.font-medium {
    font-weight: 400;
}

.text-sm {
    font-size: .875rem;
    line-height: 1.25rem;
}

.justify-between {
    justify-content: space-between;
}

.items-center {
    align-items: center;
}

.inline-flex {
    display: inline-flex;
}

.ml-2 {
    margin-left: 0.5rem;
}

a {
    color: inherit;
    text-decoration: inherit;
}

@media (min-width: 768px) {
    .md\:grid-cols-2 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

.gap-4 {
    gap: 1rem;
}

.grid {
    display: grid;
}

.mb-8 {
    margin-bottom: 2rem;
}

.h-full {
    height: 100%;
}

.border-gray-200 {
    --tw-border-opacity: 1;
    border-color: rgb(229 231 235/var(--tw-border-opacity));
}

.border {
    border-width: 1px;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.text-red-600 {
    --tw-text-opacity: 1;
    color: rgb(220 38 38/var(--tw-text-opacity));
}

.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
}

.text-center {
    text-align: center;
}

.p-3 {
    padding: 0.75rem;
}

.bg-red-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(254 202 202/var(--tw-bg-opacity));
}

.rounded-full {
    border-radius: 9999px;
}

.justify-center {
    justify-content: center;
}

.w-12 {
    width: 3rem;
}

.h-12 {
    height: 3rem;
}

.mr-4 {
    margin-right: 1rem;
}

.text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(55 65 81/var(--tw-text-opacity));
}

.leading-none {
    line-height: 1;
}

.text-base {
    font-size: 1rem;
    line-height: 1.5rem;
}

.font-serif {
    font-family: Inter, sans-serif;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

.text-gray-800 {
    --tw-text-opacity: 1;
    color: rgb(31 41 55/var(--tw-text-opacity));
}

.font-bold {
    font-weight: 700;
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.mb-5 {
    margin-bottom: 1.25rem;
}

@media (min-width: 1024px) {
    .lg\:-mx-8 {
        margin-left: -2rem;
        margin-right: -2rem;
    }
}

@media (min-width: 640px) {
    .sm\:-mx-6 {
        margin-left: -1.5rem;
        margin-right: -1.5rem;
    }
}

.overflow-x-auto {
    overflow-x: auto;
}

.-my-2 {
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
}

@media (min-width: 1024px) {
    .lg\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

@media (min-width: 640px) {
    .sm\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

.align-middle {
    vertical-align: middle;
}

.pb-2 {
    padding-bottom: 0.5rem;
}

.border-gray-100 {
    --tw-border-opacity: 1;
    border-color: rgb(243 244 246/var(--tw-border-opacity));
}

.min-w-full {
    min-width: 100%;
}

.inline-block {
    display: inline-block;
}

.last\:border-b-0:last-child {
    border-bottom-width: 0;
}

.border-b {
    border-bottom-width: 1px;
}

.overflow-hidden {
    overflow: hidden;
}

.table-auto {
    table-layout: auto;
}

table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
}

.bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246/var(--tw-bg-opacity));
}

.tracking-wider {
    letter-spacing: .05em;
}

.uppercase {
    text-transform: uppercase;
}

.font-semibold {
    font-weight: 600;
}

.text-xs {
    font-size: 10px;
}

.text-left {
    text-align: left;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.divide-gray-200>:not([hidden])~:not([hidden]) {
    --tw-divide-opacity: 1;
    border-color: rgb(229 231 235/var(--tw-divide-opacity));
}

.divide-y>:not([hidden])~:not([hidden]) {
    --tw-divide-y-reverse: 0;
    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.leading-6 {
    line-height: 1.5rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}

.truncate,
.whitespace-nowrap {
    white-space: nowrap;
}

a:hover {
    background-color: lightgray;
    color: rgb(17, 156, 114);
}
   }
   `;
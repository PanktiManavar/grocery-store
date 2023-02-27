import React from 'react'
import styled from "styled-components";
// import { Link, useNavigate, useParams } from 'react-router-dom';

const CheckOutForm = () => {

  // const [Fname, setFname] = React.useState("");
  // const [Lname, setLname] = React.useState("");
  // const [Address, setAddress] = React.useState("");
  // const [TotalPrice, setTotalPrice] = React.useState("");
  // const [FinalPrice, setFinalPrice] = React.useState("");

  return (
    <>
      {/* <FormContainer>
        <div className="register-photo">
          <div className="form-container">

            <form method="post">
              <h2 className="text-center"><strong>CheckOut</strong> Form.</h2>
              <div className='form-group'>
                <h4>01. Personal Details</h4></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" placeholder="First Name" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" placeholder="Last Name" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="email" class="form-control" placeholder='Email' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <h4 className='h4-sty'>02. Shipping Details</h4></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text-area" class="form-control" placeholder='Address' />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" class="form-control" placeholder='Pincode Number' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <h5 className='h4-sty'>Shipping Cost</h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <div className='p-3 card border-gray rounded-md '>
                      <label className='cursor-pointer label flex items-center justify-between'>
                        <div>
                          <div>
                            <h5>Fast Delivery</h5>
                            <h6 className='p-sty'>Today Cost : Rs.110</h6>
                          </div>
                        </div>
                        <div>
                          <input type="radio" value="hhh"></input>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <div className='p-3 card border-gray rounded-md '>
                      <label className='cursor-pointer label flex items-center justify-between'>
                        <div>
                          <h5>Late Delivery</h5>
                          <h6 className='p-sty'>Cost : Rs.70</h6>
                        </div>
                        <div>
                          <input type="radio" value="hhh"></input>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" >Payment Process</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="image-holder">


            </div>
          </div>
        </div>

      </FormContainer > */}
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">

            <form method="post">
              <h2 className="text-center"><strong>CheckOut</strong> Form.</h2>
              <div className='form-group'>
                <h4>01. Personal Details</h4></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" placeholder="First Name" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" placeholder="Last Name" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="email" class="form-control" placeholder='Email' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <h4 className='h4-sty'>02. Shipping Details</h4></div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text-area" class="form-control" placeholder='Address' />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-outline">
                    <input type="text" class="form-control" placeholder='Pincode Number' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <h5 className='h4-sty'>Shipping Cost</h5>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <div className='p-3 card border-gray rounded-md '>
                      <label className='cursor-pointer label flex items-center justify-between'>
                        <div>
                          <div>
                            <h5>Fast Delivery</h5>
                            <h6 className='p-sty'>Today Cost : Rs.110</h6>
                          </div>
                        </div>
                        <div>
                          <input type="radio" value="hhh"></input>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div>
                    <div className='p-3 card border-gray rounded-md '>
                      <label className='cursor-pointer label flex items-center justify-between'>
                        <div>
                          <h5>Late Delivery</h5>
                          <h6 className='p-sty'>Cost : Rs.70</h6>
                        </div>
                        <div>
                          <input type="radio" value="hhh"></input>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" >Payment Process</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="image-holder">

              {/* order summary */}

              <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
                <div className="border p-5 lg:px-8 lg:py-8 rounded-lg bg-white order-1 sm:order-2">
                  <h2 className="text-center font-semibold font-serif text-lg pb-4"><strong>Order Summary</strong></h2>
                  <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg>
                      </span>
                      <h2 className="font-medium font-serif text-sm pt-2 text-gray-600">No Item Added Yet!</h2>
                    </div>
                  </div>
                  <div
                    className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                    <form className="w-full">
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input type="text"
                          placeholder="Input your coupon code"
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-emerald-500 placeholder-gray-500 placeholder-opacity-75" />
                        <button className="btn btn-primary btn-block  md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto">Apply</button>
                        {/* <button className="btn btn-primary btn-block">Apply</button> */}
                      </div>
                    </form>
                  </div>
                  <div
                    className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                    Subtotal<span className="ml-auto flex-shrink-0 text-gray-800 font-bold">$0.00</span></div>
                  <div
                    className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                    Shipping Cost<span className="ml-auto flex-shrink-0 text-gray-800 font-bold">$0.00</span></div>
                  <div
                    className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                    Discount<span className="ml-auto flex-shrink-0 font-bold text-orange-400">$0.00</span></div>
                  <div className="border-t mt-4">
                    <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">Total
                      cost<span className="font-serif font-extrabold text-lg"> $0.00</span></div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>

      </FormContainer >

    </>
  );
};

export default CheckOutForm;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
     margin-top:30px;
   }
  
   .p-sty{
    font:size:20px;
   }
    .h4-sty{
      margin-top:12px;
    }
    .cursor-pointer {
      cursor: pointer;
    }
    .justify-between {
      justify-content: space-between;
    }
    .items-center {
      align-items: center;
    }
    .flex {
      display: flex;
    }
   .register-photo .image-holder {
     display:table-cell;
     width:350px;
     height:100px;
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
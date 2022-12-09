import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import styled from "styled-components";

const UpdateDeliverBoy = () => {

  const [fname, setFname] = React.useState('');
  const [lname, setLname] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobileno, setMobileNo] = React.useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDeliveryboyDetails();
  }, []);

  const getDeliveryboyDetails = async () => {
    console.log(params._id);
    let result = await fetch(`/api/registerselectbyid/${params.id}`);
    result = await result.json();
    // return console.log(result);
    setFname(result.fname);
    setLname(result.lname);
    setAddress(result.address);
    setEmail(result.email);
    setMobileNo(result.mobileno);
  }

  const updateDeliveryboy = async (e) => {
    e.preventDefault();
    console.warn(fname, lname, address, email, mobileno);
    let result = await fetch(`/${params.id}`, {
      method: "put",
      body: JSON.stringify({ fname, lname, address, email, mobileno }),
      headers: {
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Update Delivery Boy")
      navigate('/SelectDeliverBoy');
    }
  }
  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form method="post">
              <h2 className="text-center"><strong>Update</strong> DeliveryBoy.</h2>

              <div className="form-group">
                <input className="form-control" type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="Delivery Boy First Name" />
              </div>

              <div className="form-group">
                <input className="form-control" type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Delivery Boy Last Name" />
              </div>

              <div className="form-group">
                <textarea className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery Boy Address" />
              </div>

              <div className="form-group">
                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Delivery Boy Email" />
              </div>

              <div className="form-group">
                <input className="form-control" type="tel" value={mobileno} onChange={(e) => setMobileNo(e.target.value)} placeholder="Delivery Boy Mobile Number" />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={updateDeliveryboy}>Update Deliveryboy</button>
              </div>
            </form>
          </div>
        </div>
      </FormContainer>
    </>
  );
};

export default UpdateDeliverBoy;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
   }
   
   .register-photo .image-holder {
     display:table-cell;
     width:auto;
     background:url(image/loginimg.jpg);
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
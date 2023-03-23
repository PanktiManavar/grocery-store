import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const AddPincode = () => {

  const [pcode, setPcode] = React.useState('');
  const [error, setError] = React.useState(false);
  const [pcodeerror, setPcodeError] = React.useState('');
  const navigate = useNavigate();

  const addPincode = async (e) => {
    e.preventDefault();
    if (!pcode) {
      setError(true);
      return false;
    }

    console.warn(pcode);
    if (!error) {
      let result = await fetch('api/pincodeinsert', {
        method: 'post',
        body: JSON.stringify({ pcode }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      result = await result.json();
      if (result) {
        alert("Pincode inserted");
        navigate('/SelectPincode');

      }
      else {
        alert("Pincode not inserted");
      }
      console.warn(result);
    }
  }

  //Validate Pincode
  const validPincode = (e) => {
    var pattern = new RegExp(/^[1-9][0-9]{4}$/);
    if (!pattern.test(pcode)) {
      setPcodeError('Only 6 number are allowed!');
      setError(true);
      return false;
    } else {
      setPcodeError('');
    }
  };

  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form>
              <h2 className="text-center"><strong>Add</strong> New Pincode.</h2>
              <div className="form-group">
                <input className="form-control" type="text" value={pcode} onChange={(e) => { setPcode(e.target.value); validPincode(); }} placeholder="Pincode" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {pcodeerror}  </span>
                {error && !pcode && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}</div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={addPincode}>Add Pincode</button>
              </div>
              {/* <a href="/Signin" className="already">You don't have an account? Signup here.</a> */}
            </form>
          </div>
        </div>

      </FormContainer>
    </>
  );
};

export default AddPincode;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
     margin-top:30px;
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
     margin-top:10px;
     font-size:14px;
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
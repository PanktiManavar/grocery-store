import React, { useState } from 'react';
// import styled from "styled-components";

function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'} >
        {label}
      </label>
    </div>
  );
}

export default function ViewProductsVegetables() {
  return (
    <div className="App">
      <form>
        <TextInput label="First name" />
        <TextInput label="Last name" />
      </form>
    </div>
  );
}

// const FormContainer = styled.div`{
//   .input-container {
//     position: relative;
//     display: flex;
//     flex-direction: column;
//   }

//   .input-container label {
//     position: absolute;
//     pointer-events: none;
//     transform: translate(0, 23px) scale(1);
//     transform-origin: top left;
//     transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
//     color: #6f81a5;
//     font-size: 16px;
//     line-height: 1;
//     left: 16px;
//   }

//   .input-container:focus-within label {
//     transform: translate(0, 12px) scale(0.8);
//     color: #0a53e4;
//   }
  
//   .register-photo {
//     background:#f1f7fc;
//     padding:80px 0;
//   }
  
//   .register-photo .image-holder {
//     display:table-cell;
//     width: 189px;
//     height: 367px;
//     background:url(image/rglg.jpg);
//     background-size:cover;
//   }
  
//   .register-photo .form-container {
//     display:table;
//     max-width:900px;
//     width:90%;
//     margin:0 auto;
//     box-shadow:1px 1px 5px rgba(0,0,0,0.1);
//   }
  
//   .register-photo form {
//     display:table-cell;
//     width:400px;
//     background-color:#ffffff;
//     padding:40px 60px;
//     color:#505e6c;
//   }
  
//   @media (max-width:991px) {
//     .register-photo form {
//       padding:40px;
//     }
//   }
  
//   .register-photo form h2 {
//     font-size:24px;
//     line-height:1.5;
//     margin-bottom:30px;
//   }
  
//   .register-photo form .form-control {
//     background:#f7f9fc;
//     border:none;
//     border-bottom:1px solid #dfe7f1;
//     border-radius:0;
//     box-shadow:none;
//     outline:none;
//     color:inherit;
//     text-indent:6px;
//     height:40px;
//     margin-top:10px;
//     font-size:12px;
//   }
  
//   .register-photo form .form-check {
//     font-size:13px;
//     line-height:20px;
//   }
  
//   .register-photo form .btn-primary {
//     background:#f4476b;
//     border:none;
//     border-radius:4px;
//     padding:11px;
//     box-shadow:none;
//     margin-top:35px;
//     text-shadow:none;
//     outline:none !important;
//   }
  
//   .register-photo form .btn-primary:hover, .register-photo form .btn-primary:active {
//     background:#eb3b60;
//   }
  
//   .register-photo form .btn-primary:active {
//     transform:translateY(1px);
//   }
  
//   .register-photo form .already {
//     display:block;
//     text-align:center;
//     font-size:12px;
//     color:#6f7a85;
//     opacity:0.9;
//     text-decoration:none;
//   }
//   }
//   `;
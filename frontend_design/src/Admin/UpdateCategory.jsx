import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import styled from "styled-components";

const UpdateCategory = () => {

  const [cname, setCname] = React.useState('');
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoryDetails();
  }, []);

  const getCategoryDetails = async () => {
    let result = await fetch(`/api/categoryselectbyid/${params.id}`);
    result = await result.json();
    // return console.log(result.result.cname);
    setCname(result.result.cname);
  }

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const updateCategory = async () => {
    // console.warn(pcode);
    let result = await fetch(`/api/categoryupdate/${params.id}`, {
      method: 'put',
      body: JSON.stringify({ cname }),
      headers: {
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    console.warn(result);
    alert("Category updated");

    navigate('/SelectPincode');
  }

  const ShowProduct = () => {
    return (
      <>
        <FormContainer>
          <div className="register-photo">
            <div className="form-container">
              <form>
                <h2 className="text-center"><strong>Add</strong> New Category.</h2>
                <div className="form-group">
                  <input className="form-control" type="text" value={cname} onChange={(e) => setCname(e.target.value)} placeholder="Category" />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block" onClick={updateCategory}>Update Category</button>
                </div>
              </form>
            </div>
          </div>
        </FormContainer>
      </>
    );
  }
  return (
    <>
      {loading ? <Loading /> : <ShowProduct />}
    </>
  );
};

export default UpdateCategory;

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
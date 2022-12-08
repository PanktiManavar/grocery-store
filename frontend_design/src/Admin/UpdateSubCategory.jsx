import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import styled from "styled-components";


const UpdateSubCategory = () => {

  const [cid, setCategoryid] = useState('');
  const [sname, setSname] = React.useState('');
  const [category, setCategory] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSubCategoryDetails();
    // getcategoryname();
  }, [])


  const getSubCategoryDetails = async () => {
    let result = await fetch(`/api/subcategoryselectbyid/${params.id}`);
    result = await result.json();
    // return console.log(result.result.cid);
    setSname(result.result.sname);
    setCategoryid(result.result.cid.cname);

  }
  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            <form>
              <h2 className="text-center"><strong>Update</strong> Sub Category.</h2>
              <div className="form-group">
                <input className="form-control" type="text" value={cid} onChange={(e) => setCategoryid(e.target.value)} placeholder="Category" />
              </div>
              {/* <div className="form-group">
                <select className="form-control" onChange={(e) => setCategoryid(e.target.value)}>
                  <option value={0}>----Select Category----</option>
                  {
                    category.length > 0 ? category.map((item, index) => (
                      <option key={item._id} value={item._id}>{item.cname}</option>
                    ))
                      : <option value={0}>No Records Founds!</option>
                  }
                </select>
              </div> */}
              <div className="form-group">
                <input className="form-control" type="text" value={sname} onChange={(e) => setSname(e.target.value)} placeholder="Category" />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" >Update Category</button>
              </div>
            </form>
          </div>
        </div>
      </FormContainer>
    </>
  )
}

export default UpdateSubCategory;

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
     margin-top:8px;
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

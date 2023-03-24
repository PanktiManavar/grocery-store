import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

  const [pname, setPname] = React.useState('');
  const [descripation, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [mname, setMname] = React.useState('');
  const [qty, setQty] = React.useState('');
  const [bname, setBname] = React.useState('');
  const [pimg, setPimg] = React.useState('');
  const [subid, setSubid] = React.useState('');
  const [category, setCategory] = useState("");
  const [subcatname, setSubCategory] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
    getcategoryname();
  }, []);

  //Get Categoryname
  const getcategoryname = async () => {
    let result = await fetch("/api/categoryActiveselect");
    result = await result.json();
    setCategory(result.result);
  }

  const getsubcategorynamecateagoryid = async (categoryid) => {
    let result = await fetch(`/api/subcategoryByCategoryid/${categoryid}`);
    result = await result.json();
    setSubCategory(result.result);
    // return console.log(result.result);
  }
  const onchangeHandel = (e) => {
    getsubcategorynamecateagoryid(e.target.value);
  };

  const getProductDetails = async () => {
    // console.warn(params.id);
    let result = await fetch(`/api/productselectbyid/${params.id}`);
    result = await result.json();
    // return console.log(result.result.subid[0].sname);
    setPname(result.result.pname);
    setDescription(result.result.descripation);
    setPrice(result.result.price);
    setMname(result.result.mname);
    setQty(result.result.qty);
    setBname(result.result.bname);
    setSubid(result.result.subid[0].sname);
  }

  const updateProduct = async (e) => {
    e.preventDefault();
    // console.warn(pname, descripation, price, mname, qty, bname, pimg, subid);
    let result = await fetch(`/api/productupdate/${params.id}`, {
      method: "put",
      body: JSON.stringify({ pname, descripation, price, mname, qty, bname, subid }),
      headers: {
        'Content-Type': "application/json"
      }
    });
    result = await result.json();
    if (result) {
      console.warn(result);
      alert("product Update successfully");
      navigate('/SelectProduct');
    }
  }

  return (
    <>
      <FormContainer>

        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form >
              <h2 className="text-center"><strong>Update</strong> Product.</h2>
              <div className="form-group">

                <input className="form-control" type="text" value={pname} onChange={(e) => setPname(e.target.value)} placeholder="Product Name" />
              </div>
              <div className="form-group">
                <textarea className="form-control" type="text" value={descripation} onChange={(e) => setDescription(e.target.value)} placeholder="Discription" />
              </div>

              <div className="form-group">
                <input className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in Rupees" />
              </div>

              <div className="form-group">
                <select className="form-control" name="measurement" value={mname} onChange={(e) => setMname(e.target.value)}>
                  <option>Choose Measurement</option>
                  <option value="Kg">Kg</option>
                  <option value="Liter">Liter</option>
                  <option value="Packet">Packet</option>
                </select>
              </div>

              <div className="form-group">
                <input className="form-control" type="number" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="Quantity" />
              </div>

              <div className="form-group">
                <input className="form-control" type="text" value={bname} onChange={(e) => setBname(e.target.value)} placeholder="Brand Name" />
              </div>

              <div className="form-group">
                <select className="form-control" onChange={(e) => { onchangeHandel(e) }}>
                  <option value={0}>----Select Category----</option>
                  {
                    category.length > 0 ? category.map((item, index) => (
                      <option key={item._id} value={item._id}>{item.cname}</option>
                    ))
                      : <option value={0}>No Records Founds!</option>
                  }
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" onChange={(e) => { setSubid(e.target.value) }}>
                  <option value={0}>----Select Sub Category----</option>
                  {
                    subcatname.length > 0 ? subcatname.map((item, index) => (
                      <option key={item._id} value={item._id}>{item.sname}</option>
                    ))
                      : <option value={0}>No Records Founds!</option>
                  }
                </select>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={updateProduct}>Update Product</button>
              </div>
              {/* <a href="/Signin" className="already">You don't have an account? Signup here.</a> */}
            </form>
          </div>
        </div>

      </FormContainer>
    </>
  );
};

export default UpdateProduct;

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
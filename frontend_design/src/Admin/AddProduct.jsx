import { React, useState, useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
const AddProduct = () => {

  const [subid, setSubcatid] = useState('');
  const [subcatname, setSubCategory] = useState('');
  const [category, setCategory] = useState("");
  const [pname, setPname] = useState('');
  const [descripation, setDescipation] = useState('');
  const [price, setPrice] = useState('');
  const [mname, setMname] = useState('');
  const [qty, setQty] = useState('');
  const [bname, setBname] = useState('');
  const [pimg, setPimg] = useState('');
  const [error, setError] = useState(false);
  const [ErrorPrice, setErrorPrice] = useState('')
  const [ErrorQty, setErrorQty] = useState('')

  const navigate = useNavigate();

  //Validate Price
  const validationPrice = (e) => {
    var pattern = new RegExp(/^\d+(\.\d{1,2})?$/);
    if (!pattern.test(price)) {
      setErrorPrice('Enter valid Price!');
      setError(true);
      return false;
    } else {
      setErrorPrice('');
      setError(false);
    }
  };

  //Validate qty
  const validQuntity = (e) => {
    var pattern = new RegExp(/^[1-9]\d*$/);
    if (!pattern.test(qty)) {
      setErrorQty('Please Enter Valid Quntity!');
      setError(true);
      return false;
    } else {
      setErrorQty('');
      setError(false);
    }
  };



  useEffect(() => {
    getcategoryname();
  }, [])

  const collectdata = async (e) => {
    e.preventDefault();
    if (!pname || !descripation || !price || !qty || !mname || !pimg || !subid) {
      setError(true);
      return false;
    }
    console.log(pname, descripation, price, qty, mname, pimg, subid);
    // if (!error) {
    const formdata = new FormData();
    formdata.append('pname', pname);
    formdata.append("descripation", descripation);
    formdata.append("price", price);
    formdata.append("qty", qty);
    formdata.append("mname", mname);
    formdata.append("pimg", pimg);
    formdata.append("bname", bname);
    formdata.append("subid", subid);


    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    const result = await axios.post(
      "api/productinsert",
      formdata, config
    );
    // let results = await result.json();
    if (result) {
      swal({
        title: "Product Add!",
        text: "Your Product is Added SuccessFully!",
        icon: "success",
        button: "Okay!",
      });
      navigate('/SelectProduct');

    }
    else {
      swal({
        title: "Your Product Not Added!",
        text: "You clicked the button and Again insert a product!",
        icon: "warning",
        button: "Okay!",
      });
    }
    // }
  }

  const filehandale = (e) => {
    setPimg(e.target.files[0]);
  }

  //Get Categoryname
  const getcategoryname = async () => {
    let result = await fetch("api/categoryselect");
    result = await result.json();
    setCategory(result.result);
  }

  const getsubcategorynamecateagoryid = async (categoryid) => {
    let result = await fetch(`api/subcategoryByCategoryid/${categoryid}`);
    result = await result.json();
    setSubCategory(result.result);
  }
  const onchangeHandel = (e) => {
    getsubcategorynamecateagoryid(e.target.value);
  };

  return (
    <>
      <FormContainer>

        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form >
              <h2 className="text-center"><strong>Add</strong> New Product.</h2>
              <div className="form-group">
                <input className="form-control" type="text" value={pname} onChange={(e) => setPname(e.target.value)} placeholder="Product Name" />
                {error && !pname && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}
              </div>

              <div className="form-group">
                <textarea className="form-control" type="text" value={descripation} onChange={(e) => setDescipation(e.target.value)} placeholder="Discription" />
                {error && !descripation && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}
              </div>

              <div className="form-group">
                <input className="form-control" type="text" value={price} onChange={(e) => { setPrice(e.target.value); validationPrice() }} placeholder="Price in Rupees" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {ErrorPrice}  </span>
                {error && !price && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}
              </div>

              <div className="form-group">
                {/* <input className="form-control" type="password"  placeholder="Password" /> */}
                <select className="form-control" name="measurement" value={mname} onChange={(e) => setMname(e.target.value)}>
                  <option>Choose Measurement</option>
                  <option value="Kg">Kg</option>
                  <option value="Liter">Liter</option>
                  <option value="Packet">Packet</option>
                  <option value="Pieces">Pieces</option>
                </select>
              </div>
              {error && !mname && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please Select Measurement field!</span>}


              <div className="form-group">
                <input className="form-control" type="text" value={qty} onChange={(e) => { setQty(e.target.value); validQuntity() }} placeholder="Quantity" />
                <span className='invalid-input' style={{ fontWeight: 'bold', color: 'red' }}> {ErrorQty}  </span>
                {error && !qty && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>}
              </div>

              <div className="form-group">
                <input className="form-control" type="text" value={bname} onChange={(e) => setBname(e.target.value)} placeholder="Brand Name" />
                {/* {error && !bname && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please fill out this field!</span>} */}
              </div>

              <div className="form-group">
                <input className="form-control" type="file" onChange={filehandale} />
                {error && !pimg && <span className="invalid-input" style={{ fontWeight: 'bold', color: 'red' }}>Please select Image!</span>}
              </div>

              {/* category dropdown  */}
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

              {/* subcategory dropdown */}
              <div className="form-group">
                <select className="form-control" onChange={(e) => { setSubcatid(e.target.value) }}>
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
                <button className="btn btn-primary btn-block" onClick={collectdata}>Add Product</button>
              </div>
              {/* <a href="/Signin" className="already">You don't have an account? Signup here.</a> */}
            </form>
          </div>
        </div>

      </FormContainer>
    </>
  );
};
export default AddProduct;

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
   font-size:14px
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
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../Viewers/Viewer.css"
import styled from "styled-components";

import { useNavigate } from 'react-router-dom';


const ViewProducts = () => {

  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subid, setSubid] = useState('');
  const navigate = useNavigate();

  const auth = sessionStorage.getItem('userid');

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      // return console.log(params.id);
      let result = await fetch(`/api/productselectbyid/${params.id}`);
      result = await result.json()
      // console.log(result.result);
      setProduct(result.result);
      setLoading(false);
      setSubid(result.result.subid[0].sname)
    }
    getProduct();

  }, [])

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }
  const Addcart = async () => {
    {
      auth ?
        cart()
        :
        navigate("/Login");
    }

  }
  const cart = async () => {
    let Rid = auth;
    let Pid = params.id;
    let mname = product.mname;
    // return console.log(Rid, "+", Pid, "+", mname);

    let result = await fetch('/api/cartinsert', {
      method: 'post',
      body: JSON.stringify({
        Rid,
        Pid,
        mname
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    return result;
    result = await result.json();
    if (result) {
      alert("Cart Added ");
      navigate('/Product');

    }
    else {
      alert("Cart not Added");
    }
    // console.warn(result);
  }


  const ShowProduct = () => {
    return (
      <>

        <div className="col-md-6 rowsty">
          <img src={`http://localhost:8000/${product.pimg}`} alt={product.pname} height="300px" width='400px' />
        </div>
        <div className="col-md-6">
          <h4 className='text-uppercase text-black-50'>
            Category : {subid}
          </h4>
          <h1 className='display-6'>{product.pname}</h1>
          <h3 className="display-8 fw-bold my-4">
            Rs.{product.price}
          </h3>
          <p className="lead">
            {product.descripation}
          </p>
          <FormContainer>
            <button className="btn btn-primary px-8 py-3" onClick={Addcart}>Add To Cart</button>
            <Link className="btn btn-primary ms-2 px-8 py-3">Go to Cart</Link>
          </FormContainer>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="container stys">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  )
}

export default ViewProducts

const FormContainer = styled.div`{
.btn-primary {
  background:#f4476b;
  border:none;
  border-radius:4px;
  padding:11px;
  box-shadow:none;
  margin-top:35px;
  text-shadow:none;
  outline:none !important;
}

.btn-primary:hover,.btn-primary:active {
  background:#eb3b60;
}

.btn-primary:active {
  transform:translateY(1px);
}`
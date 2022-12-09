import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import styled from "styled-components";

const Product = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcatname, setSubCategory] = useState('');
  const [cid, setCategoryid] = useState('');

  let componentMounted = true;

  useEffect(() => {
    getCategory();
    getProducts();

  }, []);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("api/productselect");
    // return console.warn(response);
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
      // console.log(filter);
    }

    return () => {
      componentMounted = false;
    };
  };

  const getCategory = async () => {
    setLoading(true);
    let result = await fetch('api/categoryselect');
    result = await result.json();
    setCategory(result.result);
    setLoading(false);
  }

  const Addcart = async (product) => {
    return console.log("hello");
    //   let result = await fetch('api/cartinsert', {
    //     method: 'post',
    //     body: JSON.stringify({ pcode }),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   });
    //   result = await result.json();
    //   if (result) {
    //     alert("Pincode inserted");
    //     navigate('/SelectPincode');

    //   }
    //   else {
    //     alert("Pincode not inserted");
    //   }
    //   console.warn(result);
    // }

  }

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const CategoryShow = () => {
    return (
      <>
        <FormContainer>
          <section className="category">
            <h1 className="title"> Our <span>Category</span></h1>

            <div className="box-container ">
              {category.map((item, index) =>
                // <div className="pl-4">
                //   <div className="">
                //     <div className="">
                //       <h3 className='sty-h3'>{item.cname}</h3>
                //     </div>
                //   </div>
                // </div>
                <a href="#" className="box">
                  <img src="image/cat-1.png" alt="" />
                  <h3>{item.cname}</h3>
                </a>

              )}
            </div>

          </section>
        </FormContainer>
      </>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        <FormContainer>
          <section className="products">
            <h1 className="title"> Our <span>Products</span> </h1>
            <div className="box-container">
              {filter.map((product) => {
                return (
                  <>
                    <div className="box">
                      <div className="icons">
                        <Link to=""><FaShoppingCart></FaShoppingCart></Link>
                        <Link to="#"><FaHeart></FaHeart></Link>
                        <Link to={`/Product/${product._id}`}> <FaEye></FaEye></Link>
                      </div>
                      <div className="image">
                        {/* <img src={product.pimg === '' ? '' : URL.createObjectURL(product.pimg)} /> */}
                        {/* <img src={product.img} alt={product.img} /> */}
                        <img src={`http://localhost:8000/${product.pimg}`} alt="aree yaarrrr" />
                      </div>
                      <div className="content">
                        <h3>{product.pname}</h3>

                        <div className="price">Rs.{product.price} | Mess. : {product.mname}</div>

                      </div>
                    </div>

                  </>
                )
              })
              }
            </div>
          </section >
        </FormContainer>
      </>

    )
  }

  return (
    <div>
      <div className="heading">
        <h1>Our Shop</h1>
        <p> <Link to="/Home">Home </Link>- Product </p>
      </div>

      <div className='row justify-content-center'>
        {loading ? <Loading /> : <CategoryShow />}
        {loading ? <Loading /> : <ShowProducts />}

      </div>
    </div>
  )
}

export default Product;

const FormContainer = styled.div`{

  .square{
    background: grey;
    width: 160px;
    height: 150px;
    border:1px;
  }
.pl-4{
  border: solid;
    border-block-color: black;
}
  .sty-h3
  {
    text-aline:center;
    font-size:20px;
    margin-left:10px;
    margin-top:20px;
  }

  .square-box{
    position: relative;
    width: 50%;
    overflow: hidden;
    background: #4679BD;
}

.square-content{
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    text-align: center;
}
}`;
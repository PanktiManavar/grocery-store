import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);


  const navigate = useNavigate();
  const params = useParams();

  let componentMounted = true;
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');
  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("api/productActiveselect");
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
    let result = await fetch('api/categoryActiveselect');
    result = await result.json();
    setCategory(result.result);
    setLoading(false);
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
                <a href="#" className="box " >

                  <img src="image/cat-1.png" alt="" />

                  <p>{item.cname}</p>


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
                    <Card style={{ width: '20rem', textAlign: "center" }}>
                      {auth ?
                        <Link to={`/Productt/${product._id}`} style={{ textDecoration: "none" }}>
                          <Card.Img variant="top" src={`http://localhost:8000/${product.pimg}`} alt="Loading" />
                        </Link>
                        :
                        <Link to={`/Product/${product._id}`} style={{ textDecoration: "none" }}>
                          <Card.Img variant="top" src={`http://localhost:8000/${product.pimg}`} alt="Loading" />
                        </Link>
                      }
                      <Card.Body>
                        <Card.Title className='content'>{product.pname}</Card.Title>
                        <Card.Text>{product.descripation}</Card.Text>
                        <Card.Title>Rs.{product.price}</Card.Title>
                        <Button variant="primary">Add to Cart</Button>
                      </Card.Body>
                    </Card>
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

  const Catdisplay = () => {
    return (
      <>
        <FormContainer>

          <div className="categorysidebar category-section">
            <h1 className="title"> Our <span>Category</span></h1>
            {category.map((item) => {
              return (
                <div className='cartegory' style={{ borderBottom: "1px solid #bab6b6", marginBottom: "10px" }}>
                  <h3>{item.cname}</h3>
                </div>
              )
            }
            )}
          </div>

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


        {/* {loading ? <Loading /> : <CategoryShow />} */}
        {/* {loading ? <Loading /> : <Catdisplay />} */}

        {loading ? <Loading /> : <ShowProducts />}
      </div>

    </div>
  )
}

export default Product;

const FormContainer = styled.div`{
 
.category-section{
    padding: 16px;
    border-radius: 24px;
    border: 1px solid #e0e0e0;
}
.categorysidebar .category {
  width:40px;
  height:40px;
  
}
.categorysidebar .category :hover{
  background-color:#cdffc8;
 
}
.category{
  margin-left:30px;
}
.categorysidebar{
  width:20%;
  border:1px solid #ccc;
  margin-top:10px;
  margin-left:10px;
  border-radius:10px;
}
.categorysidebar .category{
  display:flex;
  align-items:center;
  border: 2px solid #e7e7e7;
  padding: 10px 20px;
  flex-wrap:wrap;
  gap:10px;
}
.categotysidebar .category h3{
  font-size:18px;
  padding:0px;
}

img, svg {
    vertical-align: middle;
}
  .square{
    background: grey;
    width: 160px;
    height: 150px;
    border:1px;
  }
.pl-4{
    background-color:lightgrey;
    border: solid;
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
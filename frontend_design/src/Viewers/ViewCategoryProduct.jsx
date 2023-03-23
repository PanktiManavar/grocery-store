import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ViewCategoryProduct = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;
    const auth = sessionStorage.getItem('userid')?.replace(/['"]+/g, '');
    useEffect(() => {
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
            console.log(filter);
        }
        return () => {
            componentMounted = false;
        };
    };
    const Loading = () => {
        return (
            <>
                Loading...
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

    return (
        <div>
            <div className="heading">
                <h1>Our Shop</h1>
                <p> <Link to="/Home">Home </Link>- Category product </p>
            </div>

            <div className='row justify-content-center'>
                {/* {loading ? <Loading /> : <CategoryShow />} */}
                {loading ? <Loading /> : <ShowProducts />}

            </div>
        </div>
    )
}

export default ViewCategoryProduct;

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
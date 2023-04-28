import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const AdminHome = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        let result = await fetch('api/countdata');
        result = await result.json();
        console.log(result.data[0].category);
        setData(result.data[0]);

    }

    return (
        <>
            <FormContainer>
                <div className="container" style={{ marginTop: "35px" }}>
                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-burlywood order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Category</h6>
                                    <h2 className="text-right"><i className="fa fa-cart-plus f-left"></i><span>{data.category}</span></h2>
                                    <Link to="/SelectCategory" style={{ textDecoration: "none", color: "black" }}><p className="m-b-0">View Category</p></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-green order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Sub Category</h6>
                                    <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span>{data.subcategory}</span></h2>
                                    {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                                    <Link to="/SelectSubCategory" style={{ textDecoration: "none", color: "black" }}><p className="m-b-0">View Sub-Category</p></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-yellow order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Pincode</h6>
                                    <h2 className="text-right"><i className="fa fa-refresh f-left"></i><span>{data.pincode}</span></h2>
                                    {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                                    <Link to="/SelectPincode" style={{ textDecoration: "none", color: "black" }}><p className="m-b-0">View Pincode</p></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-blue order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Product</h6>
                                    <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>{data.product}</span></h2>
                                    {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                                    <Link to="/SelectProduct" style={{ textDecoration: "none", color: "black" }}><p className="m-b-0">View Product</p></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-pink order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Order</h6>
                                    <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>{data.order}</span></h2>
                                    {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                                    <Link to="/AdminOrderView" style={{ textDecoration: "none", color: "black" }}><p className="m-b-0">View Order</p></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-xl-3">
                            <div className="card bg-c-cadetblue order-card">
                                <div className="card-block">
                                    <h6 className="m-b-20">Delivery-Boy</h6>
                                    <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>{data.deliveryboy}</span></h2>
                                    {/* <p className="m-b-0">Completed Orders<span className="f-right">351</span></p> */}
                                    <Link to="/SelectDeliverBoy" style={{ textDecoration: "none", color: "black" }}><p className="m-b-0">View Delivery-Boy</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FormContainer>
        </>
    );
};

export default AdminHome;

const FormContainer = styled.div`{

    body{
        margin-top:20px;
        background:#FAFAFA;
    }
    .order-card {
        color: #fff;
    }
    
    .bg-c-blue {
        background: linear-gradient(45deg,#4099ff,#73b4ff);
    }

    .bg-c-cadetblue {
        background-color : cadetblue;
        // background: linear-gradient(45deg,#4099ff,#73b4ff);
    }
    
    .bg-c-burlywood{
        background-color : burlywood;
    }

    .bg-c-green {
        background: linear-gradient(45deg,#2ed8b6,#59e0c5);
    }
    
    .bg-c-yellow {
        background: linear-gradient(45deg,#FFB64D,#ffcb80);
    }
    
    .bg-c-pink {
        background: linear-gradient(45deg,#FF5370,#ff869a);
    }
    
    
    .card {
        border-radius: 5px;
        -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
        box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
        border: none;
        margin-bottom: 30px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    
    .card .card-block {
        padding: 25px;
    }
    
    .order-card i {
        font-size: 26px;
    }
    
    .f-left {
        float: left;
    }
    
    .f-right {
        float: right;
    }

}`
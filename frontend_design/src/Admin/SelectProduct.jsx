import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const SelectProduct = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProduct();
    }, [])

    const getProduct = async () => {
        setLoading(true);
        const response = await fetch("api/productselect");
        // return console.warn(response);
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);

    };

    const deleteProduct = async (id) => {
        let result = await fetch(`api/productdelete/${id}`, {
            method: "put",
        });
        result = await result.json();
        if (result) {
            getProduct();
            alert("Product is deleted");
        }
        else {
            alert("some problem to delete")
        }
        // return alert(result);
    };

    return (
        <>
            <FormContainer>
                <div className="register-photo">
                    <div className="form-container">
                        {/* <div className="image-holder"></div> */}
                        <form>
                            <h2 className="text-center"><strong>Product</strong> List.</h2>
                            <div className="form-group">
                                <table className="styled-table">
                                    <tr>
                                        <td>Sr.No.</td>
                                        <td>Product</td>
                                        <td>Descripation</td>
                                        <td>Price</td>
                                        <td>Measurement</td>
                                        <td>Quantity</td>
                                        {/* <td>Brand</td> */}
                                        <td>Product Image</td>
                                        <td>SubCategory</td>
                                        <td>Status</td>
                                        <td>Operation</td>
                                    </tr>

                                    {
                                        filter.map((item, index) =>
                                            <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>{item.pname}</td>
                                                <td>{item.descripation}</td>
                                                <td>{item.price}</td>
                                                <td>{item.mname}</td>
                                                <td>{item.qty}</td>
                                                {/* <td>{item.bname}</td> */}
                                                <td ><img scr={item.pimg} /></td>
                                                <td>{item.subid[0].sname}</td>
                                                <td className="btn btn-primary btn-block" onClick={() => deleteProduct(item._id)}>{item.status}</td>
                                                <td className="btn btn-primary btn-block"><Link className='link' to={"/UpdateProduct/" + item._id}>Update</Link></td>
                                            </tr>
                                        )
                                    }
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </FormContainer>
        </>
    );
};

export default SelectProduct;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
     margin-top:30px;
   }
  
   .styled-table {
      border-collapse: collapse;
      margin: 25px 0;
      font-size: 10px;
      font-family: sans-serif;
      min-width: 100px;
      text-align: center;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      font-size:13px;
  }
  .link{
    text-decoration:none;
    color:white;
  }
  
  .styled-table thead tr {
      background-color: #009879;
      color: #ffffff;
      ${'' /* text-align: center; */}
  }
  .styled-table th,
  .styled-table td {
      padding: 12px 15px;
  }
  .styled-table tbody tr {
      border-bottom: 1px solid #dddddd;
  }
  
  .styled-table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
  }
  
  .styled-table tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
  }
  .styled-table tbody tr.active-row {
      font-weight: bold;
      color: #009879;
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
   }
   
   .register-photo form .form-check {
     font-size:13px;
     line-height:20px;
   }
   
   .register-photo form .btn-primary {
     background:#bac34e;
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
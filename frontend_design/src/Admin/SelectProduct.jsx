import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import swal from 'sweetalert';
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const SelectProduct = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    setLoading(true);
    let response = await fetch("api/productActiveselect");
    response = await response.json();
    if (response) {
      setFilter(response)
      setLoading(false);
    }
    // console.log(filter);

  };

  const deleteProduct = async (id, e) => {
    e.preventDefault();
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to see this record here!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (willDelete) {
      let result = await fetch(`api/productdelete/${id}`, {
        method: "put",
        headers: {
          'Content-Type': 'application/json',
        }
      });

      result = result.json();
      console.log(result);
      if (result) {
        swal({
          title: "Delete Product",
          text: "Product Successfully!",
          icon: "success",
        });
        getProduct();
      } else {
        swal({
          title: "Delete Product",
          text: "Product Deletion Fail!!",
          icon: "warning",
        });
      }
    } else {
      swal("Product record is safe!");
    }
  };
  const searchHandler = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`searchproduct/${key}`);
      result = await result.json();
      console.log(result.result);
      if (result) {
        setFilter(result.result);
      }
    } else {
      getProduct()
    }
  };
  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="card form-container">
            <div className="card-body">
              <div style={{ display: "flex" }}>
                <Link to="/AddProduct">
                  <button type="button" className="btn btn-rounded " style={{ backgroundColor: "#f4476b", color: "white", padding: "10px", borderRadius: "10px", width: "100px", height: "40px" }} name="add">
                    <span className="btn-icon-left " style={{ textDecoration: "bold" }}><FaPlusCircle /> </span>Add</button>
                </Link>
                <div className="input-group" style={{ right: "-700px", position: "absolute", padding: "10px", }}>
                  <div className="form-outline" style={{ height: "30px" }} >
                    <input type="search" onChange={searchHandler} className="form-control" placeholder="Search" style={{ height: "30px", width: "150px" }} />
                  </div>
                  <button type="button" className="btn btn-rounded " style={{ backgroundColor: "#f4476b", color: "white" }}>
                    <FaSearch />
                  </button>
                </div>
              </div>
              {/* <Link to="/AddProduct">
                <button type="button" className="btn btn-rounded " style={{ textSizeAdjust: "auto", backgroundColor: "#f4476b", color: "white", padding: "8px", borderRadius: "2.375rem" }} name="add">
                  <span className="btn-icon-left " style={{ textDecoration: "bold" }}><FaPlusCircle /> </span>Add</button>
              </Link> */}
            </div>
          </div>
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form>
              <h2 className="text-center"><strong>Product</strong> List.</h2>
              <div className="form-group">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <td>Sr.No.</td>
                      <td>Image</td>
                      <td>Product</td>
                      <td>Descripation</td>
                      <td>Price</td>
                      <td>Measurement</td>
                      <td>Quantity</td>
                      <td>Brand</td>
                      <td>SubCategory</td>
                      <td>Operation</td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      filter.length > 0 ? filter.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td ><img src={`http://localhost:8000/${item.pimg}`} alt="loading" width={90} height={90} /></td>
                          <td>{item.pname.substring(0, 10)}...</td>
                          <td>{item.descripation.substring(0, 20)}...</td>
                          <td>{item.price}</td>
                          <td>{item.mname}</td>
                          <td>{item.qty}</td>
                          <td>{item.bname}</td>
                          <td>{item.subid[0].sname}</td>

                          <td>
                            <MdDelete className="" onClick={(e) => deleteProduct(item._id, e)} style={{ padding: 2, fontSize: 26 }} />
                            <Link to={"/UpdateProduct/" + item._id} style={{ color: "black" }}><FiEdit style={{ padding: 2, fontSize: 26, marginLeft: "15px" }} /></Link>
                          </td>

                        </tr>
                      )) :
                        <tr> <td colSpan="3" style={{ textAlign: "center" }}><strong>No Records
                          Founds!</strong></td></tr>
                    }
                  </tbody>
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
 }
 .styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 700px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-size: 100px;
  font-size:14px;
}

.link{
  text-decoration:none;
  color:white;
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: center;
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
 .register-photo .image-holder {
   display:table-cell;
   width:150px;
   background:url(image/rglg.jpg);
   background-size:cover;
 }
 
 .register-photo .form-container {
   display:table;
   max-width:900px;
   width:90%;
   margin:0 auto;
   margin-top:10px;
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
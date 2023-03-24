import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import swal from 'sweetalert'
import { BsArrowDownCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const SubCategorySelect = () => {
  const [subcategory, setsubCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getsubCategory();
  }, [])

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const getsubCategory = async () => {
    setLoading(true);
    let result = await fetch('api/subcategoryDeactiveselect');
    result = await result.json();
    setsubCategory(result.result);
    setLoading(false);
  }
  // console.warn("category", category);

  const deletesubCategory = async (id, e) => {
    e.preventDefault();


    let result = await fetch(`api/subcategorydelete/${id}`, {
      method: "put",
      headers: {
        'Content-Type': 'application/json',
      }
    });

    result = result.json();
    console.log(result);
    if (result) {
      swal({
        title: "Sub-Category Active!",
        text: "Your Sub-Category are Activate!",
        icon: "success",
      });
      getsubCategory();
    }
  };
  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form >
              <h2 className="text-center" style={{ textTransform: "uppercase" }}><strong>Sub Category List</strong> </h2>

              <div className="form-group">
                <table className='styled-table'>
                  <thead>
                    <tr style={{ textTransform: "uppercase" }}>
                      <th>Sr.No.</th>
                      <th>Category Name</th>
                      <th>Sub Category Name</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      subcategory.length > 0 ? subcategory.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.cid[0].cname}</td>
                          <td>{item.sname}</td>
                          <td>
                            <BsArrowDownCircleFill className="" onClick={(e) => deletesubCategory(item._id, e)} style={{ padding: 2, fontSize: 26 }} />
                          </td>
                        </tr>
                      ))
                        :
                        <tr> <td colspan="4" style={{ textAlign: "center" }}><strong>No Records
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
  )
}

export default SubCategorySelect;

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
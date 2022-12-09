import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const SelectCategory = () => {

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategory();
  }, [])

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const getCategory = async () => {
    setLoading(true);
    let result = await fetch('api/categoryselect');
    result = await result.json();
    setCategory(result.result);
    setLoading(false);
  }
  // console.warn("category", category);

  const deleteCategory = async (id) => {
    let result = await fetch(`api/categorydelete/${id}`, {
      method: "put",
    });
    result = await result.json();

    getCategory();
    alert("Category is deleted");
  };

  return (
    <>
      <FormContainer>
        <div className="register-photo">
          <div className="form-container">
            {/* <div className="image-holder"></div> */}
            <form >
              <h2 className="text-center"><strong>Category</strong> List.</h2>

              <div className="form-group">
                <table className='styled-table'>
                  <tr>
                    <td>Sr.No.</td>
                    <td>Category Name</td>
                    <td>Status</td>
                    <td>Operation</td>
                  </tr>
                  {
                    category.map((item, index) =>
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.cname}</td>
                        <td>
                          <button className="btn btn-primary btn-block" onClick={() => deleteCategory(item._id)}>{item.status}</button>
                        </td>
                        <td>
                          <button className="btn btn-primary btn-block"><Link className='link' to={"/UpdateCategory/" + item._id}>Update</Link></button></td>
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

export default SelectCategory;

const FormContainer = styled.div`{
    .register-photo {
     background:#f1f7fc;
     padding:80px 0;
   }

   .link{
    text-decoration:none;
    color:white;
  }
      .styled-table {
        border-collapse: collapse;
        margin: 25px 0;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 900px;
        text-align: center;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        text-size: 100px;
        font-size:14px;
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
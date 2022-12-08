import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const AdminNav = () => {

    const auth = sessionStorage.getItem('role');
    return (

        <div className="d-flex flex-column flex-shrink-0 p-3 sidebar-div header">

            <header>
                {auth ?
                    <nav className="navbar">
                        <a href="/Admin/AdminHome">DashBord</a>
                        {/* <a href="/Product">Manage Product</a> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="none" href >
                                Manage Product
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/AddProduct">Add Product</Dropdown.Item>
                                <Dropdown.Item href="/SelectProduct">View Product</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" href >
                                Manage Category
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/AddCategory">Add Category</Dropdown.Item>
                                <Dropdown.Item href="/SelectCategory">View Category</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" href >
                                Manage Sub Category
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/AddSubCategory">Add Sub Category</Dropdown.Item>
                                <Dropdown.Item href="/SelectSubCategory">View Sub Category</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" href >
                                Manage Pincode
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/AddPincode">Add Pincode</Dropdown.Item>
                                <Dropdown.Item href="/SelectPincode">View Pincode</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="none" href >
                                Manage DeliveryBoy
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/AddDeliveryBoy">Add DeliveryBoy</Dropdown.Item>
                                <Dropdown.Item href="/SelectDeliverBoy">View DeliveryBoy</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </nav>
                    :
                    <ul className='nav-ul nav-right'>
                        <li><Link to="/Signin">SignUp</Link></li>
                        <li><Link to="/Login">Login</Link></li>

                    </ul>
                }
            </header>

        </div>
    )
}

export default AdminNav
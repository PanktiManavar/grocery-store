import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CustomerNav = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 sidebar-div header">
            <header>
                <nav className="navbar">
                    <a href="/Home">Home</a>
                    <a href="/Product">Product</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>

                    <div>
                        <a href='#'>Cart</a>
                        <a href='#'>My Account</a>
                    </div>
                </nav>

            </header>
        </div>



    )
}

export default CustomerNav



import React from 'react'

const AllNav = () => {
    const auth = sessionStorage.getItem('role');
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 sidebar-div header">
            <header>
                {auth ?
                    <nav>

                    </nav> :
                    <nav className="navbar">
                        <h2></h2>
                        <a href="/Home">Home</a>
                        <a href="/Product">Product</a>
                        <a href="/About">About</a>
                        <a href="/Contact">Contact</a>
                    </nav>
                }
            </header>
        </div>
    )
}

export default AllNav

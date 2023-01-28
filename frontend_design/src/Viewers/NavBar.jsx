import React from 'react';

const NavBar = () => {

    const user = sessionStorage.getItem("role");
    //const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        // navigate("/login");
    }

    console.log("Helllo", user);

    return (
        <>
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/Home">
                            Grocery Store
                        </a>
                        <div className="collapse navbar-collapse nav-right" id="navbarNavAltMarkup" >
                            <div className="navbar-nav ">
                                {
                                    user ?
                                        <>
                                            <a href='/Login' className="nav-link" onClick={logout}>Logout</a>
                                            {/* <a href='/Changepassword' className='nav-link'>Change password</a> */}
                                        </>
                                        :
                                        <>
                                            <a href='/Login' className="nav-link">Login</a>

                                            <a href='/Signin' className='nav-link'>SignIn</a>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
};
export default NavBar;
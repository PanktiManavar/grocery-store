import React from "react";

const AdminAbout = () => {
    return (
        <>
            <div>
                <div className="heading">
                    <h1>About Us</h1>
                    <p> <a href="/Home">Home </a> About </p>
                </div>

                <section className="about">

                    <div className="image">
                        <img src="image/about-img.jpg" alt="" />
                    </div>

                    <div className="content">
                        <span>Welcome to Our Shop</span>
                        <h3>Fresh and Organic Groceries</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel sequi nostrum quae nobis non quaerat nisi voluptatibus recusandae reprehenderit tempore eligendi, eum quibusdam perferendis dicta, incidunt dolores nemo ex.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem cumque molestiae blanditiis deleniti aspernatur, ab tempora quisquam sapiente commodi hic.</p>
                        <a href="#" className="btns">Read More</a>
                    </div>

                </section>

                <section className="gallery">

                    <h1 className="title"> Our <span>Gallery</span> <a href="#">View All </a> </h1>

                    <div className="box-container">

                        <div className="box">
                            <img src="image/gallery-img-1.jpg" alt="" />
                            <div className="icons">
                                {/* <a href="#"><FaEye></FaEye></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaShare></FaShare></a> */}
                            </div>
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-2.jpg" alt="" />
                            <div className="icons">
                                {/* <a href="#"><FaEye></FaEye></a>
                                <a href="#"><FaHeart></FaHeart></a>
                                <a href="#"><FaShare></FaShare></a> */}
                            </div>
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-3.jpg" alt="" />
                            <div className="icons">
                                {/* <a href="#"><FaEye></FaEye></a>
                                <a href="#"><FaHeart></FaHeart></a>
                                <a href="#"><FaShare></FaShare></a> */}
                            </div>
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-4.jpg" alt="" />
                            <div className="icons">
                                {/* <a href="#"><FaEye></FaEye></a>
                                <a href="#"><FaHeart></FaHeart></a>
                                <a href="#"><FaShare></FaShare></a> */}
                            </div>
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-5.jpg" alt="" />
                            <div className="icons">
                                {/* <a href="#"><FaEye></FaEye></a>
                                <a href="#"><FaHeart></FaHeart></a>
                                <a href="#"><FaShare></FaShare></a> */}
                            </div>
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-6.jpg" alt="" />
                            <div className="icons">
                                {/* <a href="#"><FaEye></FaEye></a>
                                <a href="#"><FaHeart></FaHeart></a>
                                <a href="#"><FaShare></FaShare></a> */}
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        </>
    );
};

export default AdminAbout;
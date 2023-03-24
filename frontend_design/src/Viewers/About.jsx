import React from 'react';
import { FaEye } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';

export default function About() {
    return (
        <>
            <div>
                <div className="heading">
                    <h1>About Us</h1>
                    <p> <a href="/Home">Home </a>{"\u00BB"} About </p>
                </div>

                <section className="about">

                    <div className="image">
                        <img src="image/about-img.jpg" alt="" />
                    </div>

                    <div className="content">
                        <span>Welcome to Our Shop</span>
                        <h3>Fresh and Organic Groceries</h3>
                        <p>Our store provides you a fresh and organic grocery right on the click of your finger tip.We provide all sorts of grocery items.Online grocery makes grocery shooping easier,
                            no rushing from one to other shop.You get all your needed things right here.</p>
                        {/* <a href="#" className="btns">Read More</a> */}
                    </div>

                </section>

                <section className="gallery">

                    <h1 className="title"> Our <span>Gallery</span> <a href="#">View All </a> </h1>

                    <div className="box-container">

                        <div className="box">
                            <img src="image/gallery-img-1.jpg" alt="" />
                            {/* <div className="icons">
                <a href="#"><FaEye></FaEye></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaShare></FaShare></a>
            </div> */}
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-2.jpg" alt="" />
                            {/* <div className="icons">
                <a href="#"><FaEye></FaEye></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaShare></FaShare></a>
            </div> */}
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-3.jpg" alt="" />
                            {/* <div className="icons">
                <a href="#"><FaEye></FaEye></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaShare></FaShare></a>
            </div> */}
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-4.jpg" alt="" />
                            {/* <div className="icons">
                <a href="#"><FaEye></FaEye></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaShare></FaShare></a>
            </div> */}
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-5.jpg" alt="" />
                            {/* <div className="icons">
                <a href="#"><FaEye></FaEye></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaShare></FaShare></a>
            </div> */}
                        </div>

                        <div className="box">
                            <img src="image/gallery-img-6.jpg" alt="" />
                            {/* <div className="icons">
                <a href="#"><FaEye></FaEye></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaShare></FaShare></a>
            </div> */}
                        </div>

                    </div>

                </section>

            </div>
        </>
    );
};

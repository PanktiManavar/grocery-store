import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>Quick Links</h3>
                        <a href="/Home"> <i><FaArrowRight></FaArrowRight></i> Home</a>
                        <a href="/Product"> <i><FaArrowRight></FaArrowRight></i> Product</a>
                        <a href="/About"> <i><FaArrowRight></FaArrowRight></i> About</a>
                        <a href="/Contact"> <i><FaArrowRight></FaArrowRight></i> Contact</a>
                    </div>

                    <div className="box">
                        <h3>Extra Links</h3>
                        <a href="#"> <i><FaArrowRight></FaArrowRight></i> My Order </a>
                        <a href="#"> <i><FaArrowRight></FaArrowRight></i> My Wishlist </a>
                        <a href="#"> <i><FaArrowRight></FaArrowRight></i> My Account </a>
                    </div>

                    {/* <div className="box">
                        <h3>NewsLetter</h3>
                        <p>Subscribe for latest updates</p>
                        <form action="">
                            <input type="email" placeholder="enter your email" />
                            <input type="submit" value="subscribe" className="btns" />
                        </form>
                        <img src="image/payment.png" className="payment" alt="" />
                    </div> */}

                </div>

            </section>

        </>
    );
};

export default Footer;
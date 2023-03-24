import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
            <div>
                <div className="heading">
                    <h1>Contact Us</h1>
                    <p> <a href="/Home">Home </a>{"\u00BB"} Contact </p>
                </div>

                <section className="contact">

                    <div className="icons-container">

                        <div className="icons">
                            <i><FaPhone></FaPhone></i>
                            <h3>Our Number</h3>
                            <p>+91 7802968166</p>
                            <p>+91 9737431201</p>
                        </div>

                        <div className="icons">
                            <i><FaEnvelope></FaEnvelope></i>
                            <h3>Our Email</h3>
                            <p>panktimanavar01@gmail.com</p>
                            <p>krishnapatel21@gmail.com</p>
                        </div>

                        <div className="icons">
                            <i><FaLocationArrow></FaLocationArrow></i>
                            <h3>Our Address</h3>
                            <p>GUJARAT, india - 394185</p>
                        </div>

                    </div>

                    {/* <div className="row">

        <form action="">
            <h3>Get In Touch</h3>
            <div className="inputBox">
                <input type="text" placeholder="enter your name" className="box" />
                <input type="email" placeholder="enter your email" className="box" />
            </div>
            <div className="inputBox">
                <input type="number" placeholder="enter your number" className="box" />
                <input type="text" placeholder="enter your subject" className="box" />
            </div>
            <textarea placeholder="your message" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btns" />
        </form>

        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1633968347413!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>

    </div> */}

                </section>

            </div>
        </>
    );
};

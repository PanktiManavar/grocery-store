import React from 'react';

const Home = () => {
    return (
        <>
            <div>
                <section className="home">

                    <div className="slides-container">

                        <div className="slide active">
                            <div className="content">
                                <span>Fresh and Organic</span>
                                <h3>upto 50% off</h3>
                                <a href="/Product" class="btns">Shop Now</a>
                            </div>
                            <div className="image">
                                <img src="image/home-img-1.png" alt="banner" />
                            </div>
                        </div>

                    </div>
                </section>

                <section className="banner-container">

                    <div className="banner">
                        <img src="image/banner-1.jpg" alt="banner" />
                        <div className="content">
                            <span>Limited Sales</span>
                            <h3>upto 50% off</h3>
                            <a href="/Product" class="btns">Shop Now</a>
                        </div>
                    </div>

                    <div className="banner">
                        <img src="image/banner-2.jpg" alt="banner" />
                        <div className="content">
                            <span>Limited Sales</span>
                            <h3>upto 50% off</h3>
                            <a href="/Product" class="btns">Shop Now</a>
                        </div>
                    </div>

                    <div className="banner">
                        <img src="image/banner-3.jpg" alt="banner" />
                        <div className="content">
                            <span>Limited Sales</span>
                            <h3>upto 50% off</h3>
                            <a href="/Product" class="btns">Shop Now</a>
                        </div>
                    </div>

                </section>

            </div>
        </>
    );
};

export default Home;

import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

export default function ViewProductsFruits() {
  return (
    <>
    <div>
    <div className="heading">
          <h1>our shop</h1>
          <p> <a href="/Home">home</a>View All Product </p>
        </div>

        <section className="products">

          {/* <h1 className="title"> our <span>products</span> <a href="/ViewProducts">View All Products </a> </h1> */}

          <div className="box-container">

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-2.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-3.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-4.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-5.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-6.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-7.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="content">
                  <div className="price">$18.99</div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                <a href="/Login"><FaShoppingCart></FaShoppingCart></a>
                <a href="/Login"><FaHeart></FaHeart></a>
                <a href="/Login"><FaEye></FaEye></a>
              </div>
              <div className="image">
                <img src="image/product-8.jpg" alt="" />
              </div>
              <div className="content">
                <h3>organic food</h3>
                <div className="content">
                  <div className="price">$18.99</div>
                </div>
              </div>
            </div>


          </div>

        </section>
    </div>
    </>
  );
};

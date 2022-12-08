import React from "react";

const AdminProduct = () => {
  return (
    <>
      <div>
        <div className="heading">
          <h1>Our Shop</h1>
          <p> <a href="/Home">Home</a> Product </p>
        </div>

        <section className="category">

          <h1 className="title"> Our <span>Category</span> <a href="/AddProduct">Add New Products</a> </h1>

          <div className="box-container">

            <a href="/ViewProducts" className="box">
              <img src="image/cat-1.png" alt="" />
              <h3>Fresh Fruits</h3>
            </a>

            <a href="/ViewProducts" className="box">
              <img src="image/cat-2.png" alt="" />
              <h3>Vegetables</h3>
            </a>

            <a href="/ViewProducts" className="box">
              <img src="image/cat-3.png" alt="" />
              <h3>Organic Spices</h3>
            </a>

            <a href="/ViewProducts" className="box">
              <img src="image/cat-4.png" alt="" />
              <h3>Fresh Meat</h3>
            </a>

            <a href="/ViewProducts" className="box">
              <img src="image/cat-5.png" alt="" />
              <h3>Organic Wheat</h3>
            </a>

          </div>

        </section>

        <section className="products">

          <h1 className="title"> Our <span>Products</span> <a href="/ViewProducts">View All Products </a> </h1>

          <div className="box-container">

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-2.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-3.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-4.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-5.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-6.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
                <div className="price">$18.99</div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-7.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
                <div className="content">
                  <div className="price">$18.99</div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="icons">
                {/* <a href="#"><FaShoppingCart></FaShoppingCart></a>
                <a href="#"><FaHeart></FaHeart></a>
                <a href="#"><FaEye></FaEye></a> */}
              </div>
              <div className="image">
                <img src="image/product-8.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Organic Food</h3>
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

export default AdminProduct;
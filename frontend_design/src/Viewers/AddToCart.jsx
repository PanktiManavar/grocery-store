import React from "react";
import styled from "styled-components";

const AddToCart = () => {
    return (
        <>
            <FormContainer>
                <div className="card">
                    <div className="row">
                        <div className="col-md-8 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col"><h4><b>Shopping Cart</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">3 items</div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img className="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg" /></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                            <div className="row border-top border-bottom">
                                <div className="row main align-items-center">
                                    <div className="col-2"><img class="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg" /></div>
                                    <div className="col">
                                        <div className="row text-muted">Shirt</div>
                                        <div className="row">Cotton T-shirt</div>
                                    </div>
                                    <div className="col">
                                        <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                                    </div>
                                    <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                                </div>
                            </div>
                            <div className="back-to-shop"><a href="#"></a><span className="text-muted">Back to shop</span></div>
                        </div>
                        <div className="col-md-4 summary">
                            <div><h5><b>Summary</b></h5></div>

                            {/* <div className="row">
                        <div className="col" style="padding-left:0;">ITEMS 3</div>
                        <div className="col text-right">&euro; 132.00</div>
                    </div> */}

                            <form>
                                <p>SHIPPING</p>
                                <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                                <p>GIVE CODE</p>
                                <input id="code" placeholder="Enter your code" />
                            </form>
                            <div className="totalprice row">
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">&euro; 137.00</div>
                            </div>
                            <button className="btn btn-primary btn-block btn">CHECKOUT</button>
                        </div>
                    </div>

                </div>
            </FormContainer>
        </>
    );
};

export default AddToCart;

const FormContainer = styled.div`{
  body{
    background: #ddd;
    min-height: 100vh;
    vertical-align: middle;
    display: flex;
    font-family: sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
}
.title{
    margin-bottom: 5vh;
}
.card{
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}
@media(max-width:767px){
    .card{
        margin: 3vh auto;
    }
}
.cart{
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}
@media(max-width:767px){
    .cart{
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
}
.summary{
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}
@media(max-width:767px){
    .summary{
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
    }
}
.summary .col-2{
    padding: 0;
}
.summary .col-10
{
    padding: 0;
}.row{
    margin: 0;
}
.title b{
    font-size: 1.5rem;
}
.main{
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}
.col-2, .col{
    padding: 0 1vh;
}
a{
    padding: 0 1vh;
}
.close{
    margin-left: auto;
    font-size: 0.7rem;
}
img{
    width: 3.5rem;
}
.back-to-shop{
    margin-top: 4.5rem;
}
h5{
    margin-top: 4vh;
}
hr{
    margin-top: 1.25rem;
}
form{
    padding: 2vh 0;
}
select{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input{
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder
{
      color:transparent;
}
${'' /* .btn{
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0;
}
.btn:focus{
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    -webkit-user-select: none;
    transition: none; 
}
.btn:hover{
    color: white;
} */}
a{
    color: black; 
}
a:hover{
    
    text-decoration: none;
}
.totalprice {
  border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;
}
 .btn-primary {
     background:#f4476b;
     border:none;
     border-radius:4px;
     padding:11px;
     box-shadow:none;
     margin-top:35px;
     text-shadow:none;
     outline:none !important;
   }
   
   .btn-primary:hover,  .btn-primary:active {
     background:#eb3b60;
   }
   
  .btn-primary:active {
     transform:translateY(1px);
   }
 #code{
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253) , rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}
}`;
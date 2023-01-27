import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// for viewers
import NavBar from './Viewers/NavBar';
import Footer from './Viewers/Footer';
import Login from './Viewers/Login';
import Signin from './Viewers/Signin';
import Home from './Viewers/Home';
import Product from './Viewers/Product';
import About from './Viewers/About';
import Contact from './Viewers/Contact';
import ViewProducts from './Viewers/ViewProducts';
import ViewProductsFruits from './Viewers/ViewProductsFruits';
import ViewProductsVegetables from './Viewers/ViewProductsVegetables';
import ViewProductsSpices from './Viewers/ViewProductsSpices';
import ViewProductsDairy from './Viewers/ViewProductsDairy';
import ViewCategoryProduct from './Viewers/ViewCategoryProduct';
import CheckOutForm from './Viewers/CheckOutForm';
import ForgotPassword from './Viewers/ForgotPassword';
import Changepassword from './Viewers/Changepassword';
import Sendmail from './Viewers/Sendmail';
// for admin
import AdminHome from './Admin/AdminHome';
import AddProduct from './Admin/AddProduct';
import AddCategory from './Admin/AddCategory'
import AddDeliveryBoy from './Admin/AddDeliverBoy'
import AddSubCategory from './Admin/AddSubCategory';
import AddPincode from './Admin/AddPincode';
import SelectPincode from './Admin/SelectPincode';
import SelectCategory from './Admin/SelectCategory';
import UpdatePincode from './Admin/UpdatePincode';
import UpdateCategory from './Admin/UpdateCategory';
import SelectSubCategory from './Admin/SelectSubCategory';
import UpdateSubCategory from './Admin/UpdateSubCategory';
import SelectProduct from './Admin/SelectProduct';
import UpdateProduct from './Admin/UpdateProduct';
import SelectDeliverBoy from './Admin/SelectDeliverBoy';
import UpdateDeliverBoy from './Admin/UpdateDeliverBoy';
//for Customer
import CustHome from './Customer/CustHome';
import AddToCart from './Viewers/AddToCart';
//component
import AdminComponent from './component/AdminComponent';
import CustomerComponent from './component/CustomerComponent';
import AllcComponent from './component/AllcComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* for viewers */}

          <Route element={<CustomerComponent />}>
            <Route path="/Homee" element={<Home></Home>} />
            <Route path="/Productt" element={<Product></Product>} />
            <Route path="/Aboutt" element={<About></About>} />
            <Route path="/Contactt" element={<Contact></Contact>} />
            {/* <Route path="/Product/:id" element={<ViewProducts></ViewProducts>} /> */}
            <Route path="/ViewProductsFruits" element={<ViewProductsFruits></ViewProductsFruits>} />
            <Route path="/ViewProductsVegetables" element={<ViewProductsVegetables></ViewProductsVegetables>} />
            <Route path="/ViewProductsSpices" element={<ViewProductsSpices></ViewProductsSpices>} />
            <Route path="/ViewProductsDairy" element={<ViewProductsDairy></ViewProductsDairy>} />
            <Route path="/ViewCategoryProduct/:id" element={<ViewCategoryProduct></ViewCategoryProduct>} />
            <Route path='/CheckOutForm' element={<CheckOutForm />} />
            <Route path='/AddToCart' element={<AddToCart />} />
            <Route path="/Changepassword" element={<Changepassword></Changepassword>} />
          </Route>

          {/* for admin */}
          <Route element={<AdminComponent />}>
            <Route path="/AdminHome" element={<AdminHome />} />
            <Route path="/AddProduct" element={<AddProduct></AddProduct>} />
            <Route path="/AddCategory" element={<AddCategory></AddCategory>} />
            <Route path="/AddDeliveryBoy" element={<AddDeliveryBoy></AddDeliveryBoy>} />
            <Route path="/AddSubCategory" element={<AddSubCategory></AddSubCategory>} />
            <Route path="/AddPincode" element={<AddPincode />} />
            <Route path="/SelectPincode" element={<SelectPincode></SelectPincode>} />
            <Route path="/SelectCategory" element={<SelectCategory />} />
            <Route path="/UpdatePincode/:id" element={<UpdatePincode />} />
            <Route path='/UpdateCategory/:id' element={<UpdateCategory />} />
            <Route path="/SelectSubCategory" element={<SelectSubCategory />} />
            <Route path="/UpdateSubCategory/:id" element={<UpdateSubCategory />} />
            <Route path="/SelectProduct" element={<SelectProduct />} />
            <Route path="/UpdateProduct/:id" element={<UpdateProduct />} />
            <Route path="/SelectDeliverBoy" element={<SelectDeliverBoy />} />
            <Route path='/UpdateDeliverBoy/:id' element={<UpdateDeliverBoy />} />

          </Route>
          {/* for customer */}
          <Route element={<AllcComponent />}>
            <Route path="/CustHome" element={<CustHome></CustHome>} />

            <Route path="/Login" element={<Login></Login>} />
            <Route path="/Signin" element={<Signin></Signin>} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/sendmail' element={<Sendmail />} />
            <Route path="/Home" element={<Home></Home>} />
            <Route path="/Product" element={<Product></Product>} />
            <Route path="/About" element={<About></About>} />
            <Route path="/Contact" element={<Contact></Contact>} />
            <Route path="/Product/:id" element={<ViewProducts></ViewProducts>} />
          </Route>
        </Routes>

      </BrowserRouter>

      <Footer />

    </div >
  );
};

export default App;

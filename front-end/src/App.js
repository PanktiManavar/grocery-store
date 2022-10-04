import './App.css';
import Nav from "./component/Nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from './component/footer';
import Signup from './component/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Aboutus page component</h1>}></Route>
          <Route path="/categoty" element={<h1>Category page component</h1>}></Route>
          <Route path="/pincode" element={<h1>Pincode page component</h1>}></Route>
          <Route path="/product" element={<h1>Product page component</h1>}></Route>
          <Route path="/logout" element={<h1>Logout page component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile page component</h1>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        {/* <h1>welcome dashbord</h1> */}
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;

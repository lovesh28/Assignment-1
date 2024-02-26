import Home from "./component/Home/Home";
import "./App.css";
import Navbar1 from "./component/Navbar/Navbar";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Profile from "./component/Profile/Profile";
import ProductListing from "./component/Product/ProductListing";
// import ViewProduct from "./component/Product/ViewProduct";
import ProductItem from "./component/Product/ProductItem";
import ViewProduct from "./component/Product/ViewProduct";

function App() {
  return (
    <>
      <Router>
        <Navbar1 />
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route exact path="/login" element={<Login />} />{" "}
          <Route exact path="/SignUp" element={<SignUp />} />{" "}
          <Route exact path="/Profile" element={<Profile />} />{" "}
          <Route path="/product" element={<ProductListing />} />{" "}
          {/* <Route path="/view/:id" element={<ViewProduct />} /> */}
          <Route path="/view/:id" element={<ViewProduct />} />
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;

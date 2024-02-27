import Home from "./component/Home/Home";
import "./App.css";
import Navbar1 from "./component/Navbar/Navbar";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from "./component/SignUp/SignUp";
import Profile from "./component/Profile/Profile";
import ProductListing from "./component/Product/ProductListing";
import ProductItem from "./component/Product/ProductItem";
import ViewProduct from "./component/Product/ViewProduct";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }

    const users = JSON.parse(localStorage.getItem("userData"));
    if (users && users.length > 0) {
      setIsSignedUp(true);
    }
  }, []);

  const isAuthenticated = isLoggedIn || isSignedUp;

  return (
    <>
      <Router>
        <Navbar1 />
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route
            exact
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn}/>}
            />
          {" "}
          <Route
            exact
            path="/signup"
            element={<SignUp setIsSignedUp={setIsSignedUp} />}
            />{" "}
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/product" element={<ProductListing />} />{" "}
          <Route path="/view/:id" element={<ViewProduct />} />
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;

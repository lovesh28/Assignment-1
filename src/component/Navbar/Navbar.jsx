import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SignUp from "../SignUp/SignUp";

// import logo from "../../../public/logo.jpeg";

const Navbar1 = () => {
  //   const navigateTo = useNavigate();
  //   const [IsLogggedIn , setIsLoggedIn] = useState(false);
  //   const [IsSignedUp , setIsSignedUp] = useState(false);

  //   useEffect(() => {
  //     // Check if user is logged in
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if (loggedInUser) {
  //       setIsLoggedIn(true);
  //     }

  //     // Check if user is signed up
  //     const signedUpUser = localStorage.getItem('signUpUsers');
  //     if (signedUpUser) {
  //       setIsSignedUp(true);
  //     }
  //   }, []);

  //   const isAuthenticated = isLoggedIn  || isSignedUp;

  //   const handleLogout = () => {

  //    localStorage.removeItem('loggedInUser')
  //    localStorage.removeItem('signUpUsers')
  //     setIsLoggedIn(false);
  //     setIsSignedUp(false);
  //     navigateTo('/');
  //   };

  return (
    <>
      <div className="navbar-body">
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand>
            <img
              style={{ height: "40px", width: "80px" }}
              src="logo.jpeg"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navbar-text">
              <FontAwesomeIcon icon="fa-solid fa-house" /> Home
            </Nav.Link>
            <Nav.Link className="navbar-text" as={Link} to="/product">
              <FontAwesomeIcon icon="fa-solid fa-layer-group" /> Products
            </Nav.Link>
            <Nav.Link className="navbar-text" as={Link} to="/profile">
              <FontAwesomeIcon icon="fa-regular fa-user" />
              Profile
            </Nav.Link>
          </Nav>
          <div className="button-container">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button
                as={Link}
                to="/login"
                className="btn btn-primary me-md-2"
                type="button"
              >
                Login
              </Button>
              <Button
                as={Link}
                to="/signUp"
                className="btn btn-primary"
                type="button"
              >
                SignUp
              </Button>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Navbar1;

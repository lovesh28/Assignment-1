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
import {
  FaUser,
  FaSignInAlt,
  FaHome,
  FaLayerGroup,
  FaRegUser,
} from "react-icons/fa";

import SignUp from "../SignUp/SignUp";
import "./Navbar.css";



const Navbar1 = () => {
  return (
    <>
      <div className="navbar-body">
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ height: "40px", width: "80px" }}
              src="logo.jpeg"
              alt="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          
          <Nav className="me-auto" navbarScroll={false}>
            <Nav.Link as={Link} to="/" className="navbar-text">
              <FaHome className="nav-icon" /> Home
            </Nav.Link>
            <Nav.Link className="navbar-text" as={Link} to="/product">
              <FaLayerGroup className="nav-icon" /> Products
            </Nav.Link>
            <Nav.Link className="navbar-text" as={Link} to="/profile">
              <FaRegUser className="nav-icon" />
              Profile
            </Nav.Link>
          </Nav>

          <div className="button-container">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button as={Link} to="/login" className="nav-btn" type="button">
                <FaSignInAlt className="nav-icon" />
                Login
              </Button>
              <Button as={Link} to="/signUp" className="nav-btn" type="button">
                <FaUser className="nav-icon" />
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

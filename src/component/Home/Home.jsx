import React from "react";
import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          style={{ height: "200px", width: "200px" }}
          src="ecommerce.png"
          alt="logo"
        />
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            This website holds various type of e-commerce products tap on the
            products button to see the products.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button variant="success" as={Link} to="/product">
              Products
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

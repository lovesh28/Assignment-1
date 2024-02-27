import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./Product.css";

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <img
          className="product-img"
          src={product.thumbnail}
          alt={product.title}
          style={{ borderRadius: "7px", width: "100%", height: "200px" }}
        />
        <h3
          className="product-text text-uppercase"
          style={{ fontSize: "1.7rem" }}
        >
          {product.title}
        </h3>
        <p className="product-view-text">
          <strong>Brand:</strong> {product.brand}
        </p>
        <p className="product-view-text">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="product-view-text">
          <strong>Rating:</strong>{" "}
          <span className="star">{product.rating} ☆</span>
        </p>
        <p className="product-view-text">{product.catagory}</p>
        <Button as={Link} className="product-btn" to={`/view/${product.id}`}>
          {/* <ViewProduct/> */}
          View Product Details{" "}
          
        </Button>
      </div>
    </>
  );
};


ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

export default ProductItem;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("id", id);
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error Fetching Data", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  console.log("Loading:", loading);
  console.log("Error", error);
  console.log("Product:", product);

  return (
    <>
      <h1 className="product-title">Product Details</h1>
      <div className="product-details d-flex justify-content-center align-items-center">
        {loading ? (
          <p>loading details...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="product-detail-card">
            <div className="product-img-container">
              <img
                className="product-img"
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "300px" }}
              />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="product-text">{product.brand} </p>
              <p>{product.description}</p>
              <p className="product-text">
                {" "}
                <strong>Price:</strong> ${product.price}{" "}
              </p>
              Discount:{" "}
              <p className="product-text">{product.discountPercentage}%</p>
              <p>
                <strong>Rating:</strong>{" "}
                <span className="star">{product.rating} ☆</span>
              </p>
              <p className="product-text fs-6 fw-bold">
                {" "}
                {product.stock} left in stock
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewProduct;

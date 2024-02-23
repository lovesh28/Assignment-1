import React from "react";

const ViewProduct = () => {
  return (
  <>
  <h1 className="product-title">Product Details</h1>
  <div className="product-details d-flex justify-content-center align-items-center">
    { loading ? (
        <p>loading details...</p>
    ):(
        <div className="product-detail-card">
            <div className="product-img-container">
                <img src={product.thumbnail} 
                alt={product.title}
                style={{width:"300px"}} />
            </div>
            <div className="product-info">
                <h3>
                    {product.title}
                </h3>
                <p className="product-text">{product.brand} </p>
                <p>{product.description}</p>
                

            </div>
        </div>
    ) }












  </div>

  </>
  );
};

export default ViewProduct;

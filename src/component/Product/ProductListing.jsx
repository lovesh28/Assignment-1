import React, { useEffect, useState } from 'react';

const ProductListing = () => {
  // State for products
  const [products, setProducts] = useState([]);
  
  // State for pagination
  const [pagination, setPagination] = useState({
    skip: 0,
    limit: 8,
  });

  useEffect(() => {
    // Function to fetch products based on pagination parameters
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?skip=${pagination.skip}&limit=${pagination.limit}`
        );

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Error fetching products:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    // Fetch products when the component mounts or when pagination changes
    fetchProducts();
  }, [pagination]);

  return (
    <div>
      <h2>Product Listing</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>Category: {product.category}</p>
              <p>Brand: {product.brand}</p>
              <p>Rating: {product.rating}</p>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discount}%</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() =>
            setPagination((prev) => ({ ...prev, skip: Math.max(0, prev.skip - prev.limit) }))
          }
        >
          Previous
        </button>
        <button
          onClick={() => setPagination((prev) => ({ ...prev, skip: prev.skip + prev.limit }))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListing;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../redux/ProductAction";
// import productReducer from "./redux/Reducer";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products, loading, totalPages } = useSelector((state) => state);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(1));
  }, [dispatch]);
  
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         ` https://dummyjson.com/products?skip=${(page - 1) * 8}&limit=8`
  //       );
  //       setProducts(response.data.products);
  //       setTotalPages(Math.ceil(response.data.total / 8));
  //       setLoading(false);
  //       // console.log("response : ", response);
  //     } catch (error) {
  //       console.log("Error Fetching", error);
  //     }
  //   };
  //   fetchData();
  // }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div>
        <h1 className="product-title"> Products</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="product-body" style={{ marginLeft: "9px" }}>
            {loading ? (
              <p>Loading Products...</p>
            ) : (
              <div className="row">
                {products.map((product) => (
                  <div className="col-xxl-3" key={product.id}>
                    <ProductItem product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-3">
          <nav aria-label="Page naviation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a
                  className="page-link page-btn"
                  onClick={handlePrevPage}
                  disabled={page === 1 ? "true" : ""}
                  style={{ marginRight: "10px" }}
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <span className="col-10 text-center">
                  page {page} of {totalPages}
                </span>
              </li>
              <li className="page-item">
                <a
                  className="page-link page-btn"
                  onClick={handleNextPage}
                  disabled={page === totalPages}
                  style={{ marginLeft: "10px" }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProductListing;

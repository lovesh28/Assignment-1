
import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products, totalPages) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products, totalPages },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

export const fetchProducts = (page) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?skip=${(page - 1) * 8}&limit=8`
      );
      dispatch(fetchProductsSuccess(response.data.products, Math.ceil(response.data.total / 8)));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};

export default fetchProducts
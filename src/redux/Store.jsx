// import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducer";

const store = configureStore({
  reducer: productReducer,
});

export default store;

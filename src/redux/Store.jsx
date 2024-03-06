import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from "./Reducer";

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;

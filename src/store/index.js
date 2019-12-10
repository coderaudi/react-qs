// src/js/store/index.js
import { createStore } from "redux";
import actionReducer from "../reducer/article_reducer";
const store = createStore(actionReducer);

export default store;

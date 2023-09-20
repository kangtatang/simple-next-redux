// store.js

// import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import postsSlice from "./slices/postSlice";

// Reducer
const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});

export { store };

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import newsReducer from "../features/newsReducer";

export default configureStore({
  reducer: {
   
    news: newsReducer,
    register: authReducer,

  },
});

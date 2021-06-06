import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";

export default configureStore({
  reducer: {
   

    register: authReducer,

  },
});

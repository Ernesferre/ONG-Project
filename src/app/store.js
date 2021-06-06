import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import userReducer from "../features/userSlice";
export default configureStore({
  reducer: {
    register: authReducer,
    users: userReducer,
  },
});

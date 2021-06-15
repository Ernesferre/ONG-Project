import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import userReducer from "../features/userSlice";
import organizationReducer from "../features/organizationReducer";

export default configureStore({
  reducer: {
    register: authReducer,
    users: userReducer,
    organization: organizationReducer,
  },
});

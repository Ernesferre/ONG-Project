import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
  name: "register",
  initialState: {

    data: {},
    
 
  },
  reducers: {

    SET_LOGIN: (state, action) => {
       state.data = action.payload
    
    },
    SET_REGISTER: (state, action) => {
      state.data = action.payload
   }

  },
});

export const {SET_LOGIN} = authReducer.actions;
export const {SET_REGISTER} = authReducer.actions;


export const selectToken = state => state.register.data;


export default authReducer.reducer;
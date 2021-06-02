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
   },

   SET_LOGOUT: (state) => {
     state.data = null
        // CUANDO SE DEFINA LA VARIABLE "LOGGED" EN EL INITIAL STATE ACTIVO LA LINEA DE ABAJO
        
    //  state.logged = false
   }

  },
});

export const {SET_LOGIN} = authReducer.actions;
export const {SET_REGISTER} = authReducer.actions;
export const {SET_LOGOUT} = authReducer.actions;

export const selectToken = state => state.register.data;


export default authReducer.reducer;
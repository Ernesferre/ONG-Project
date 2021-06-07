import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: "",
  status: "idle",
  userList: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://ongapi.alkemy.org/api/users");
  return response.data.data;
});

export const editUser = createAsyncThunk("users/editUser", async (userData) => {
  const response = await axios.put(
    "http://ongapi.alkemy.org/api/users",
    userData
  );
  return response.data;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const response = await axios.post(
      "http://ongapi.alkemy.org/api/users",
      userData
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await axios.delete(
    `http://ongapi.alkemy.org/api/users/${id}`
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (users) => {
        users.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (users, action) => {
        users.userList = action.payload;
        users.status = "idle";
      })
      .addCase(fetchUsers.rejected, (users, action) => {
        users.error = action.error;
        users.status = "idle";
      });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  error: "",
  status: "idle",
  userList: [],
  singleUser: {},
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://ongapi.alkemy.org/api/users");
  return response.data.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (id) => {
  const response = await axios.get(`http://ongapi.alkemy.org/api/users/${id}`);
  return response.data.data;
});

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ userData, id }) => {
    const response = await axios.put(
      `http://ongapi.alkemy.org/api/users/${id}`,
      userData
    );
    return response.data;
  }
);

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
  reducers: {
    removeUserFromState: (user, action) => {
      const index = user.userList.indexOf((user) => user.id === action.payload);
      user.userList.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (users) => {
        users.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (user, action) => {
        user.singleUser = action.payload;
        user.status = "idle";
      })
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
      })
      .addCase(createUser.pending, (users) => {
        users.status = "creating user";
      })
      .addCase(createUser.rejected, (users, action) => {
        users.error = action.error;
      });
  },
});

export const { removeUserFromState } = userSlice.actions;

export default userSlice.reducer;

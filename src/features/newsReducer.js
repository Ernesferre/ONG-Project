import axios from "axios";

import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("news/fetchNews", async (_, { dispatch }) => {
  const data = await axios
    .get(`http://ongapi.alkemy.org/api/news`)
    .then((res) => res.data.data)
    dispatch(setAllNews(data))
});

const newsAdapter = createEntityAdapter({
  selectId: (news) => news.id
})

const newsReducer = createSlice({
  name: "news",
  initialState: newsAdapter.getInitialState(),
  reducers: {
    setAllNews: newsAdapter.setAll,
  },
  extraReducers: {},
});

export const newsSelectors = newsAdapter.getSelectors(
  (state) => state.news
)
export const {setAllNews, add} = newsReducer.actions;

export default newsReducer.reducer;

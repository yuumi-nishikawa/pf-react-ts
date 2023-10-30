import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchArticlesWithDocumentID,fetchArticlesById}  from './api';


export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {

  const articles = await fetchArticlesWithDocumentID();
  return articles;
});

export const fetchById = createAsyncThunk('articles/fetchArticlesById', async (id: string) => {
  const article = await fetchArticlesById(id);
  return article;
});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    posts: [],
    postDetail: null,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },

  extraReducers: {
    [String(fetchArticles.fulfilled)]: (state, action) => {

      state.posts = action.payload;
    },
    [String(fetchById.fulfilled)]: (state, action) => {
      state.postDetail = action.payload;
    }
  },
});


export const { setPosts } = articlesSlice.actions;


export default articlesSlice.reducer;


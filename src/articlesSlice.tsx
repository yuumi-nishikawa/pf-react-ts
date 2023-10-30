import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchArticlesWithDocumentID,fetchArticlesById}  from './api';

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {

  const articles = await fetchArticlesWithDocumentID();
  return articles;
});

export const fetchById = createAsyncThunk('articles/fetchArticlesById', async (id) => {
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
    [fetchArticles.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [fetchById.fulfilled]: (state, action) => {
      state.postDetail = action.payload;
    }
  },
});


export const { setPosts } = articlesSlice.actions;


export default articlesSlice.reducer;


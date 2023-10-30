import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticlesWithDocumentID,fetchArticlesById }  from './api';


export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const articles = await fetchArticlesWithDocumentID();
  return articles;
});

export const fetchById = createAsyncThunk('articles/fetchById', async (id: string) => {
  const articles = await fetchArticlesById(id);
  return articles;
});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    posts: [] as {id: string}[],
    postDetail: null as {id: string} | null,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.postDetail = action.payload;
      });
  },
});

export const { setPosts } = articlesSlice.actions;


export default articlesSlice.reducer;


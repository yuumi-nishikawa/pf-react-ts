import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../articlesSlice';

export const Store = configureStore({
  reducer: {
    articles: Reducer,
  },
});

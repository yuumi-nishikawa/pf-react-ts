import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../articlesSlice';

export default configureStore({
  reducer: {
    articles: Reducer,
  },
});

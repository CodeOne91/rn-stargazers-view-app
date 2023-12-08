import {configureStore} from '@reduxjs/toolkit';
import stargazersListSlice from './reducers/stargazersSlice';

export const store = configureStore({
  reducer: {
    stargazersList: stargazersListSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

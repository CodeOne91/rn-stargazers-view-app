import {configureStore} from '@reduxjs/toolkit';
import stargazersListSlice from './reducers/stargazersSlice';
import IsThemeDarkSlice from './reducers/isThemeDarkSlice.ts';

export const store = configureStore({
  reducer: {
    stargazersList: stargazersListSlice,
    theme: IsThemeDarkSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

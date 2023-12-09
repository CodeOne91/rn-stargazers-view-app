import {configureStore} from '@reduxjs/toolkit';
import stargazersListSlice from './reducers/stargazersSlice';
import IsThemeDarkSlice from './reducers/isThemeDarkSlice.ts';
import SnackbarContextSlice from './reducers/SnackbarContextSlice.ts';

export const store = configureStore({
  reducer: {
    stargazersList: stargazersListSlice,
    theme: IsThemeDarkSlice,
    snackbarContext: SnackbarContextSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

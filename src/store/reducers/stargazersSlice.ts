import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Stargazer} from '../../models/interface';

interface StargazersListState {
  value: Stargazer[];
  loading: boolean;
  error: string | null;
}

const initialState: StargazersListState = {
  value: [],
  loading: false,
  error: null,
};

export const stargazersListSlice = createSlice({
  name: 'stargazersList',
  initialState,
  reducers: {
    setStargazers: (state, action: PayloadAction<Stargazer[]>) => {
      state.value = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: state => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearStargazers: state => {
      state.value = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {setStargazers, setLoading, setError, clearStargazers} =
  stargazersListSlice.actions;

export default stargazersListSlice.reducer;

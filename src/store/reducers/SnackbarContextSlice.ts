import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SnackbarState {
  open: boolean;
  message: string;
}

const initialState: SnackbarState = {
  open: false,
  message: '',
};

const SnackbarContextSlice = createSlice({
  name: 'snackbarContext',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.message = action.payload;
    },
    hideSnackbar: state => {
      state.open = false;
      state.message = '';
    },
  },
});

export const {showSnackbar, hideSnackbar} = SnackbarContextSlice.actions;
export default SnackbarContextSlice.reducer;

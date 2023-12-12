import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ErrorMessage} from '../../models/interface.ts';

interface SnackbarState {
  open: boolean;
  message: string;
  isError: boolean;
  error: ErrorMessage;
}

const initialState: SnackbarState = {
  open: false,
  message: '',
  isError: false,
  error: {status: '', message: ''},
};

const SnackbarContextSlice = createSlice({
  name: 'snackbarContext',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.message = action.payload;
    },
    showErrorSnackbar: (state, action: PayloadAction<ErrorMessage>) => {
      state.open = true;
      state.error = action.payload;
      state.isError = true;
    },
    hideSnackbar: state => {
      state.open = false;
      state.message = '';
      state.isError = false;
    },
  },
});

export const {showSnackbar, showErrorSnackbar, hideSnackbar} =
  SnackbarContextSlice.actions;
export default SnackbarContextSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<any>) => {
      state.isDarkMode = action.payload;
      AsyncStorage.setItem('isDarkMode', JSON.stringify(action.payload));
    },
  },
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;

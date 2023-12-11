import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {toggleTheme} from '../store/reducers/isThemeDarkSlice.ts';

export async function initializeTheme(
  dispatch: ReturnType<typeof useDispatch>,
) {
  try {
    const value = await AsyncStorage.getItem('isDarkMode');
    const isDarkMode = value === 'true';
    dispatch(toggleTheme(isDarkMode));
  } catch (error) {}
}

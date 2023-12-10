/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import store from './src/store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toggleTheme} from './src/store/reducers/isThemeDarkSlice.ts';
import {darkTheme, lightTheme} from './src/style/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/StackNavigator.tsx';
import SnackbarBasic from './src/components/snackbar/SnackbarBasic.tsx';
import './src/components/translator/IMLocalize';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

function AppContainer(): JSX.Element {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: any) => {
    return state.theme.isDarkMode;
  });

  useEffect(() => {
    AsyncStorage.getItem('isDarkMode').then(value => {
      if (value === 'false') {
        dispatch(toggleTheme(false));
      } else {
        dispatch(toggleTheme(true));
      }
    });
  }, []);

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        <MainNavigator />
        <SnackbarBasic />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

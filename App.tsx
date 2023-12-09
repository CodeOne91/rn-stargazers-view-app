/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import StargazersList from './src/screens/Home';
import store from './src/store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {toggleTheme} from './src/store/reducers/isThemeDarkSlice.ts';
import {darkTheme, lightTheme} from './src/style/theme/theme';

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
      <SafeAreaView style={{flex: 1}}>
        <StargazersList />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import store from './src/store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import {darkTheme, lightTheme} from './src/style/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/StackNavigator.tsx';
import SnackbarBasic from './src/components/snackbar/SnackbarBasic.tsx';
import './src/components/translator/IMLocalize';
import {toggleTheme} from './src/store/reducers/isThemeDarkSlice.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
function AppContainer(): JSX.Element {
  const dispatch = useDispatch();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const value = await AsyncStorage.getItem('isDarkMode');
        const isDarkMode = value === 'true';
        dispatch(toggleTheme(isDarkMode));
        setIsThemeLoaded(true);
      } catch (error) {
        console.error('Error initializing theme:', error);
      }
    };

    initializeApp();
  }, [dispatch]);

  if (!isThemeLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <PaperProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        <MainNavigator />
        <SnackbarBasic />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;

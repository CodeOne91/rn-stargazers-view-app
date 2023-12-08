/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';
import StargazersList from './src/screens/Home';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {extendTheme, NativeBaseProvider} from 'native-base';

function App(): JSX.Element {
  const config = {
    useSystemColorMode: true,
  };

  const extendedTheme = extendTheme({config});
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={extendedTheme}>
        <SafeAreaView style={{flex: 1}}>
          <StargazersList />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;

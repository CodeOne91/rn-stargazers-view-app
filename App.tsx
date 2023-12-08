/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import StargazersList from './src/screens/Home';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {NativeBaseProvider, Box} from 'native-base';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView>
          <StatusBar />
          <Header />
          <StargazersList />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;

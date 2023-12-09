/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import StargazersList from './src/screens/Home';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={{flex: 1}}>
          <StargazersList />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
}

export default App;

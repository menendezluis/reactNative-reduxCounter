/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/app/store';

import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';
import ButtonByAmount from './src/components/ButtonByAmount';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
        <ButtonRedux title="Increment" />
        <ButtonRedux title="Decrement" />
        <ButtonByAmount title="Increment" amount={5} />
        <ButtonByAmount title="Decrement" amount={5} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

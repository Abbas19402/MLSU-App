import React from 'react';
import {
  Text,
} from 'react-native';
import Providers from './src/Providers';
import 'react-native-gesture-handler';
import RootSwitch from './src/Root/RootSwitch';

function App(){
  return (
    <Providers>
        <RootSwitch />
    </Providers>
  );
}

export default App;
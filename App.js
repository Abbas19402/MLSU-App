import React from 'react';
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
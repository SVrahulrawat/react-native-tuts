import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './component/FlatCards';
import Elevated from './component/Elevated';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
        <FlatCards />
        <Elevated />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

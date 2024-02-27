import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './component/FlatCards';
import Elevated from './component/Elevated';
import FancyCard from './component/FancyCard';
import ActionCard from './component/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <Elevated />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

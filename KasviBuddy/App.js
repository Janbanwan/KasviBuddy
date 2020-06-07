import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { mockDatabase } from './src/data/mockBackend/mockDatabase';
import { Menu } from './src/components/Menu/Menu';

const App = () => {
  const [plants, setPlants] = useState(mockDatabase());
  console.log(plants);
  return (
    <SafeAreaView styles={{ flex: 1 }}>
      <Menu plants={plants} />
    </SafeAreaView>
  );
};

export default App;

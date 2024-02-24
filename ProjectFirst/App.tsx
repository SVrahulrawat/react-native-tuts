
import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

function App(){
  const theme=useColorScheme()==="dark"
  return(
<View style={styles.container}>
    <Text style={theme?styles.whiteText:styles.darkText}>Hello world!!!!!!!!!!!!!!</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  whiteText:{
    color: 'white',
  },
  darkText:{
    color: 'black',
  }
  
});

export default App;
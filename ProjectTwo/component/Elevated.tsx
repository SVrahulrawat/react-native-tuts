import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Elevated = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated</Text>
      <ScrollView horizontal>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  cards: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#CAD',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
});
export default Elevated;

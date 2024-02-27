import {
  View,
  Text,
  StyleSheet,
  Linking,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <ScrollView>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.headingContainer, styles.elevatedCard]}>
        <Text style={styles.headerText}>WHats new in js 21!</Text>
        <View>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Just like every year javascript bring new feature this year with
              four new update this year
            </Text>
          </View>
          <View style={styles.socialLink}>
            <View style={styles.footContainer}>
              <TouchableOpacity
                onPress={() => openWebsite('https://www.google.com/')}>
                <Text>Read more</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footContainer}>
              <TouchableOpacity
                onPress={() => openWebsite('https://www.google.com/')}>
                <Text>Follow me</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  headingContainer: {},
  headerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: '600',
    height: 35,
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {},
  footContainer: {
    marginTop: 8,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: 20,
    color: 'black',
  },
  elevatedCard: {
    backgroundColor: 'orange',
  },
  socialLink: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
export default ActionCard;

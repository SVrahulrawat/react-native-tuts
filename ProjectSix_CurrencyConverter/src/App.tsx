import {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

// Constants

import {currencyByRupee} from './Constants';

// component
import CurrencyBtn from './components/CurrencyBtn';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setRestultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;

      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;

      setRestultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: '#F48E20',
        textColor: '#000000',
      });
    }
  };

  return (
    // <SafeAreaView>
    <>
      <StatusBar />

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput
            value={inputValue}
            maxLength={14}
            onChangeText={setInputValue}
            keyboardType={'number-pad'}
            placeholder="Enter the amount in Rupee"
          />
        </View>
        {resultValue && <Text style={styles.resultTxt}>{resultValue}</Text>}

        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => buttonPressed(item)}>
                <CurrencyBtn {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
    // {/* // </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616161',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;

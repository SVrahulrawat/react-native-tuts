import {View, Text} from 'react-native';
import React, {useState} from 'react';
// form validation

import * as Yup from 'yup';
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4 characters')
    .max(16, 'Should be maximum of 16 characters')
    .required('Length is required '),
});
const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);

  const generatePasswordString = (passworLength: number) => {
    let characterList = '';
    let upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    let specialChar = '!@#$%^&*()_+';
    let numberChar = '0123456789';
    if (lowerCase) {
      characterList += lowerCaseChar;
    }
    if (upperCase) {
      characterList += upperCaseChar;
    }
    if (symbols) {
      characterList += specialChar;
    }
    if (numbers) {
      characterList += numberChar;
    }
    const passwordResult = createPassword(characterList, passworLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setLowerCase(true);
    setNumbers(false);
    setUpperCase(false);
    setsymbols(false);
    setIsPasswordGenerated(false);
    setPassword('');
  };
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

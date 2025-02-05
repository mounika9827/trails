import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

const BiometricAuth = () => {
  const [biometryType, setBiometryType] = useState('');

  useEffect(() => {
    rnBiometrics.isSensorAvailable().then(result => {
      if (result.available) {
        setBiometryType(result.biometryType || 'Biometrics');
      } else {
        Alert.alert('Error', 'Biometric authentication not available.');
      }
    });
  }, []);

  const handleBiometricAuth = async () => {
    const result = await rnBiometrics.simplePrompt({
      promptMessage: 'Authenticate with Biometrics',
    });

    if (result.success) {
      Alert.alert('Success', 'Authenticated successfully!');
    } else {
      Alert.alert('Failed', 'Authentication failed. Try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter Phone Screeen lock, PIN , Password or Fingerprint</Text>
      <Button title="Unlock App" onPress={handleBiometricAuth} />
    </View>
  );
};

export default BiometricAuth;

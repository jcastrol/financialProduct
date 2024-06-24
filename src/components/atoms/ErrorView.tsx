import React from 'react';
import { View, Text } from 'react-native';

const ErrorView = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
    }} testID='error-view-container'>
    <Text style={{ fontSize: 16, color: 'red' }} testID='error-text'>
      Hubo un problema ,intenta otra vez
    </Text>
  </View>
);

export default ErrorView;
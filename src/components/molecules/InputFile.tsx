import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  errorMessage?: string;
  errorShow?: boolean;
  disabled?: boolean;
  testID: string;
};

const InputField: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  placeholder = '',
  errorShow = false,
  errorMessage = 'text',
  disabled = false,
  testID,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {borderColor: errorShow ? 'red' : '#D5D5D5'},
          disabled && styles.disabledInput,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={!disabled}
        autoCorrect={false}
        autoComplete="off"
        testID={testID}
      />
      <View style={{height: 20}}>
        {errorMessage && errorShow ? (
          <Text style={styles.error}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  error: {
    fontSize: 14,
    color: '#D30000',
    marginTop: 5,
  },
  disabledInput: {
    backgroundColor: '#F0F0F0',
    borderColor: '#D5D5D5',
  },
});

export default InputField;

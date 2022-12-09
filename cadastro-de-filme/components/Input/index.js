import * as React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const Input = (props) => {
  const { label, placeholder, keyboardType, onChange, value, disabled } = props
  const { input, text, view } = styles

  return (
    <View style={view}>
      <Text style={text}>{label}</Text>
      <TextInput 
        name={label}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChange}
        value={value}  
        style={input}
        disabled={disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 16,
    padding: 5,
  },

  view: {
    width: '100%',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'start'
  },
});

export default Input;



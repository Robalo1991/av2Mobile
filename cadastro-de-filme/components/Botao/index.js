import * as React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Botao = (props) => {
  const { onPress, title, disabled, variant, color } = props
  
  const { button, text } = styles
  const combineBtnStyles = StyleSheet.flatten([button, styles[variant]]); 
  const combineTxtStyles = StyleSheet.flatten([text, styles[color]]); 

  return (
    <Pressable 
      onPress={onPress}
      disabled={disabled}
      style={combineBtnStyles} 
    >
      <Text style={combineTxtStyles}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#2c4251',
    maxWidth: 320,
    width: '100%',
    color: 'white'
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },

  red: {
    backgroundColor: '#d16666',
  },

  outlined: {
    backgroundColor: 'white',
    borderColor:  '#2c4251',
    borderStyle: 'solid', 
    borderWidth: 1,
  },

  green: {
    backgroundColor: '#b6c649',
  },

  blueTxt: {
    color: '#2c4251'
  }
});

export default Botao;



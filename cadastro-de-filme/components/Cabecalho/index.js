import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Cabecalho = (props) => {
  const { onPress, title, style } = props
  
  const { view, text, button, btnTxt } = styles
  const combineBtnStyles = StyleSheet.flatten([button, style]); 

  return (
    <View 
      style={view} 
    >
    <Pressable 
      onPress={onPress}
      style={combineBtnStyles} 
    >
      <Text style={btnTxt}>Voltar</Text>
    </Pressable>
      <Text style={text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#2c4251',
    position: 'fixed',
    width: '100%',
    height: 50,
    top: 0
  },

  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },

  btnTxt: {
    
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'    
  },

  button: {
    position: 'absolute',
    left: 12,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
});

export default Cabecalho;



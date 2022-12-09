import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Botao from '../../components/Botao/index'
import Cabecalho from '../../components/Cabecalho/index' 
import Formulario from '../../components/Formulario/index'
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
  const navigation = useNavigation();

  const {content, grid} = styles

  return (
    <>
      <Cabecalho 
        title='Cadastrar'
        onPress={() => navigation.navigate('Home')}
      />
      <View style={content}>
        <Formulario type='cadastro' />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    padding: 14,
    marginTop: 60,
    maxWidth: 320,
    width: '100%',
    alignSelf: 'center'
  },

  grid:{
    marginBottom: 24,
    width: '100%',
    alignItems: 'center'
  }
});

export default Cadastro

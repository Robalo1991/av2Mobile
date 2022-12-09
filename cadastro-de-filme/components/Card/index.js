import * as React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import Botao from '../Botao/index'
import { useNavigation } from '@react-navigation/native'
import { excluir } from '../../service'
import Formulario from '../Formulario/index'

const Input = (props) => {
  const { titulo, genero, codigo, ano } = props
  const { view, content, card, info, text, text2, actions, grid, title, form } = styles
  const [showForm, setShowForm] = React.useState(false)
  const [cod, setCod] = React.useState(undefined)


  const navigation = useNavigation();

  const handleDelete = async () => {
    await excluir(codigo)
  };

  const handleEdit = async () => {
    setCod(codigo)
    setShowForm(true)
  };

  return (
    <View style={card}>
      <View style={content}>
        <Text style={title}>{titulo}</Text>
        
        <View style={info}>
          <Text style={text}>Gênero: </Text>
          <Text style={text2}>{genero}</Text>
        </View>

        <View style={info}>
          <Text style={text}>Ano de lançamento: </Text>
          <Text style={text2}>{ano}</Text>
        </View>
      </View>
      <View>
      {!showForm && (
        <>
        <View style={grid}>
          <Botao title='Excluir' variant='red' onPress={handleDelete} />
        </View>

        <View style={grid}>
          <Botao title='Editar' variant='outlined' color='blueTxt' onPress={handleEdit}  />
        </View>
        </>
      )}
        
      </View>

      {showForm && (
        <View style={form}>
          <Formulario cod={cod} type='editar' />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    width:'100%'
  },

  info: {
    display: 'flex',
    flexDirection: 'row'
  },

  view: {
    width: '100%',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 24
  },

  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'start'
  },

  text2: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'start'
  },

  grid: {
    marginBottom: 12
  },

  title: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'start',
    marginBottom: 16
  },

  form: {
    marginBottom: 12,
    padding: 4,
    borderRadius: 8,
    backgroundColor: '#ecf0f1'
  }
});

export default Input;



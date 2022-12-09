import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Botao from '../../components/Botao/index'
import Cabecalho from '../../components/Cabecalho/index' 
import Input from '../../components/Input/index'
import { useNavigation } from '@react-navigation/native'
import Formulario from '../../components/Formulario/index'
import Card from '../../components/Card/index'
import { obter } from '../../service'

const Home = () => {
  const {content, grid} = styles
  const navigation = useNavigation();
  const [filmes, setFilmes] = React.useState(undefined)

  const getFilmes = async () => {
    const lista = await obter()
    setFilmes(lista)
  }

  return (
    <>
      <Cabecalho title='Início' style={ {display: 'none'} } />
      <View style={content}>
        <View style={grid}>
          <Botao 
            title={'Listar Filmes'} 
            variant='outlined' 
            color='blueTxt' 
            onPress={() => getFilmes()} 
          />
        </View>

        <View style={grid}>
          <Botao 
            title={'Cadastrar Filme'} 
            onPress={() => navigation.navigate('Cadastro')} 
          />
        </View>
        
        <View style={grid}>
        {filmes?.map(filme => {
          return (
            <View style={grid}>
              <Card
                titulo={filme.Titulo}
                ano={filme.Ano}
                codigo={filme.Codigo}
                genero={filme.Gerero}
              />
            </View>
          )
        })}
      </View>
      <View style={grid}>
        <Text>Grupo: João Victor Robalinho</Text>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: 18,
    marginTop: 60,
    maxWidth: 300,
    width: '100%',
    alignSelf: 'center'
  },

  grid:{
    marginBottom: 12,
    width: '100%',
    alignItems: 'center'
  }
});

export default Home

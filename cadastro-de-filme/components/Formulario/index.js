import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Botao from '../Botao/index'
import Input from '../Input/index'
import { useNavigation } from '@react-navigation/native';
import { incluir, alterar } from '../../service'
import { validarCampos } from '../../validations'

const Formulario = (props) => {
  const { label, type, data, cod } = props
  const { view, action } = styles

  const navigation = useNavigation();

  const [codigo, setCodigo] = React.useState(undefined)
  const [titulo, setTitulo] = React.useState(undefined)
  const [genero, setGenero] = React.useState(undefined)
  const [ano, setAno] = React.useState(undefined)
  const [error, setError] = React.useState([])
  const [showForm, setShowForm] = React.useState(true)

  const handleSubmit = async () => {
    let errorMsgs;
    switch (type) {
      case 'cadastro': 
        errorMsgs = await validarCampos(codigo, titulo, genero, ano, type);
        setError(errorMsgs)

        if(errorMsgs.length === 0) {
          await incluir(titulo, genero, ano)
          navigation.navigate('Home')
          setError([])
        }
        break;
      case 'editar': 
        errorMsgs = await validarCampos(cod, titulo, genero, ano, type);
        setError(errorMsgs)

        if(errorMsgs.length === 0) {
          await alterar(cod, titulo, genero, ano)
          window.location.reload(false);
        }
        break;
      default:
        console.log(`Sorry, we are out of ${type}.`);
    }
  };

  return (
    <>
    {showForm && (
      <>
        {error.length > 0 && ( 
          error.map(err => {
            return (
              <View style={view}>
                <Text>{err}</Text>
              </View>
            )
        }))}

        {type === 'editar' && (
          <View style={view}>
            <Input 
              label='Código: ' 
              placeholder='Ex: 001'
              onChange={(e) => setCodigo(e)}
              value={cod} 
              disabled={true}
            />
          </View>
        )}

        <View style={view}>
          <Input 
            label='Título: ' 
            placeholder='Nome do filme' 
            onChange={(e) => setTitulo(e)}
            value={titulo} 
          />
        </View>

        <View style={view}>
          <Input 
          label='Gênero: ' 
          placeholder='Ação, aventura, drama'
          onChange={(e) => setGenero(e)}
          value={genero} 
        />
        </View>

        <View style={view}>
          <Input 
            label='Ano: ' 
            placeholder='Ano de lançamento' 
            onChange={(e) => setAno(e)}
            value={ano} 
          />
        </View>

        <View style={action}>
          <View style={view}>
            <Botao title='Ok' variant='green' onPress={handleSubmit} />
          </View>

          <View style={view}>
            <Botao title='Cancelar' variant='red' onPress={type === 'editar' ? () => window.location.reload(false) : () => navigation.navigate('Home')} />
          </View>
        </View>
      </>
    )}
  </>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 12,
    
  },

  action: {
    width: '100%',
    marginTop: 24
  },
});

export default Formulario;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/index';
import Cadastro from './pages/Cadastro/index';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Cadastro Filmes" component={Cadastro} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
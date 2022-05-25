/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './front-end/Login'
import Cadastro from './Cadastro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App (){
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown:  false,
      }}/>
      <Stack.Screen name="Cadastro" component={Cadastro}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

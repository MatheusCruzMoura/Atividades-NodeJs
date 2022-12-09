import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './screens';
import CadastroUsuario from './screens/cadastroUsuario';
import ListaContatos from './screens/listaContatos';
import CadastroContato from './screens/cadastroContato';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Fragment>
      <StatusBar style="auto" translucent backgroundColor="transparent" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
          <Stack.Screen name="ListaContatos" component={ListaContatos} />
          <Stack.Screen name="CadastroContato" component={CadastroContato} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

export default App;



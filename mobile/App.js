import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './screens';
import CadastroUsuario from './screens/cadastroUsuario';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Fragment>
      <StatusBar style="auto" translucent backgroundColor="transparent" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

export default App;



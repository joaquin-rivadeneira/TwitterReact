import { StyleSheet, Text, View } from 'react-native';

//Librerias Navegación 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen para conectar entre si
import Login from '/Users/PC/Desktop/front-twitter-react-native/screens/Login'
import IngresarNoticia from './screens/IngresarNoticia'
import noticias from './screens/noticias'
import registrar from './screens/registrar'

//Crear funcion "pila de pantallas"
const Stack = createNativeStackNavigator();

function MyStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name='Login'
        component={Login}
      />    
      <Stack.Screen
      options={{headerShown:false}} 
      name='IngresarNoticias'
      component={IngresarNoticia}
      />
      <Stack.Screen 
      options={{headerShown:false}}
      name='Registrarse'
      component={registrar}
      />
      <Stack.Screen
      options={{headerShown:false}}
      name='noticia'
      component={noticias}
      />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack>
      </MyStack>
    </NavigationContainer>
  );
}


import { StyleSheet, Text, TextInput, View,Dimensions,Image, TouchableOpacity } from 'react-native';

export default function Registro({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
     
        <Image style={styles.logo} // IMAGE APLICATION  
        source={require('/Users/PC/Desktop/front-twitter-react-native/assets/Logo.png')}/>
        
        <TextInput style={styles.input}
        placeholder='DNI'
        placeholderTextColor={'#000000'}
        />
        <TextInput style={styles.input}
        placeholder='Contraseña'
        placeholderTextColor={'#000000'}
        />
        <TextInput style={styles.input}
        placeholder='Repetir Contraseña'
        placeholderTextColor={'#000000'}
        />
     <TouchableOpacity style={styles.botonregistro}>
      <Text style={styles.textboton}>
        Registrarse
      </Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.botoninicio}
     onPress={()=> navigation.navigate("Login")}>
     
      <Text style={styles.textobotoninicio}>
        ¿Ya tienes cuenta? Iniciar Sesión
      </Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0B4B66',
    alignItems: 'center',
    padding:40,
  },
  title: {
    fontSize:40,
    color:'white',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop:20,
    borderRadius:10,
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor:'#D9D9D9',
  },
  logo: {
    width:300,
    height:300,
    margin:10,
    marginTop:20,
  },
  textboton: {
    textAlign:'center',
    color:'#ffff',
    fontSize:20,
  },
  textobotoninicio: {
    color:'white',
    fontSize:20,
  },
  botoninicio:{
    marginTop:10,
    fontSize:40,
  },
  botonregistro: {
    padding: 10,
    backgroundColor:'#0D0D25',
    marginTop:20,
    borderRadius:10,
    height:45,
    borderWidth:1,
    width: Dimensions.get('screen').width * 0.8,
  },
});
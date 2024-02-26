import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View,Text,Dimensions,TouchableOpacity, Image} from 'react-native';

const login = ({navigation}) => {
  return (
     // HEADER APLICATION 
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidos</Text>
      <Text style={styles.subtitle}>Escuela Técnica N°2 "Ing Emilio Rebuelto"</Text>

      <Image style={styles.logo} // IMAGE APLICATION  
        source={require('/Users/PC/Desktop/front-twitter-react-native/assets/Logo.png')}/>

      <TextInput  style={styles.input} // INPUT USER 
        placeholder='Usuario'
        placeholderTextColor={'#000000'}
      />
      <TextInput style={styles.input} // INPUT PASSWORD 
      placeholder='Contraseña'
      placeholderTextColor={'#000000'}
      />

        <TouchableOpacity style={styles.boton}
          onPress={()=> navigation.navigate("noticia")}>    
            <Text style={styles.textboton}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton2} 
        onPress={()=> navigation.navigate("Registrarse")}>
            <Text style={styles.textboton2}>¿Todavía no tenes cuenta? Registrarse</Text>
        </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop:30,
    borderRadius:10,
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor:'#D9D9D9',
  },
  container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'#0B4B66',
  },
  title: {
    marginTop:50,
    fontSize: 30,
    textAlign:'center',
    color:'#ffff'
  },
  subtitle:{
    fontSize:20,
    textAlign:'center',
    color:'#ffff',
  },
  boton:{
    padding: 10,
    backgroundColor:'#0D0D25',
    marginTop:20,
    borderRadius:10,
    height:45,
    borderWidth:1,
    width: Dimensions.get('screen').width * 0.8, 
  },
  textboton: {
    textAlign:'center',
    color:'#ffff',
    fontSize:20,
  },
  boton2: {
    marginTop:10,
  },
  textboton2:{
    fontSize:20,
    color:'#ffff'
  },
  logo: {
    width:300,
    height:300,
    margin:10,
    marginTop:20,
  },
});

export default login;
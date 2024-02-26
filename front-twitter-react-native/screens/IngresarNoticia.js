import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrese una Noticia</Text>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.textinput}
        placeholder='Publicar nueva noticia'
        placeholderTextColor={'#000000'}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textboton}>
            Publicar
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.boton}>
          <Text style={styles.textboton}
          onPress={()=> navigation.navigate("noticia")}
          >
            Noticias
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B4B66',
    alignItems: 'center',
  },
  title: {
    fontSize:40,
    marginTop:90,
    color:'white',
  },
  inputcontainer: {
    marginTop:30,
    backgroundColor:'#D9D9D9',
    borderRadius:6,
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').width * 0.9,
  },
  boton:{
    padding: 20,
    backgroundColor:'#0D0D25',
    marginTop:20,
    borderRadius:10,
    width: Dimensions.get('screen').width * 0.9,
    borderRadius:4, 
  },
textboton: {
  textAlign:'center',
  fontSize:20,
  color:'white',
},
textinput: {
  flex:1,
  textAlign:'center',
  color:'black',
  fontSize:30,
}
});
import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias Técnica 2</Text>
      <View>
        <TouchableOpacity style={styles.boton}
        onPress={()=> navigation.navigate("IngresarNoticias")}
        
        >
          <Text style={styles.textboton}>
            Publicar Noticia
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.novedadescontainer}>
        <Text style={styles.novedades}>
          Novedades
        </Text>
      </View>
     <View style={styles.tweets}>
      <Text style={styles.textotweets}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
      </Text>
      </View> 
      <View style={styles.tweets}>
      <Text style={styles.textotweets}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
      </Text>
      </View> 
      <View style={styles.tweets}>
      <Text style={styles.textotweets}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
      </Text>
      </View> 
      <View style={styles.tweets}>
      <Text style={styles.textotweets}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
      </Text>
      </View> 
      <View style={styles.tweets}>
      <Text style={styles.textotweets}>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
      </Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B4B66',
    alignItems: 'center',
    padding:50,
  },
  title: {
    color:'white',
    fontSize:30,
  },
  boton: {
    padding:10,
    backgroundColor: '#0D0D25',
    padding: 10,
    marginTop:20,
    borderRadius:10,
    height:45,
    borderWidth:1,
    width: Dimensions.get('screen').width * 0.8,
  },
textboton: {
  textAlign:'center',
  color:'white',
},
novedadescontainer: {
  margin:10,
},
novedades: {
fontSize: 25,
color:'#D9D9D9',
},
tweets: {
  margin:5,
  backgroundColor:'#D9D9D9',
  padding:20,
  borderRadius:10,
  width: Dimensions.get('screen').width * 0.9,  
},
textotweets: {
  textAlign:'center',
  color:'#000000',
  fontSize:13,
}
});

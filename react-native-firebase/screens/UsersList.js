// IMPORTS PARA ESTILOS ETC 
import { ScrollView, Text, TouchableOpacity, View,StyleSheet, Dimensions } from 'react-native'

// LIBRERIA E IMPORTS FIRESTORE 
import { getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoct } from 'firebase/firestore'

// CONEXIÓN CON LA BASE DE DATOS 
import conexionBD from '../database/firebase'

// ESTADOS DE REACT 
import React, { useEffect, useState } from 'react'


// FIREBD NOMBRE DE LA CONEXION DE LA BASE DE DATOS 
//GET FIRESTORE PARA CONECTAR EL IMPORT "CONEXIONBD"
const FireBD = getFirestore(conexionBD)


// CODIGO APP 
export default function UsersList(nav) {
  //
  const [lista, setLista] = useState([])

  useEffect(() => {
    const getLista = async () => {
      try {
        
        // Seleccionamos la collection (tabla) "productos"
        //FireBD es el nombre de la conexion de la base de datos
        const querySnapshot = await getDocs(collection(FireBD, 'productos'))
        
        // la constante docs inicializa sin ningún dato. Creamos un array vacio  
        const docs = []

        //ForEach recorremos el array 
        querySnapshot.forEach((doc) => {
          const { 
                  nombre, 
                  color, 
                  stock 
                } = doc.data()
          
          docs.push({
            id:doc.id,
            nombre,
            color,
            stock,
          })
        })
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    }
    getLista()
  }, [])

  return (

    <ScrollView>
      <TouchableOpacity style={styles.agregarproducto} onPress={()=> nav.navigation.navigate("Home")}>
        <Text style={styles.textobotonagregar}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.agregarproducto}>
        <Text style={styles.textobotonagregar}>Agregar Productos</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titulo}>
          Lista de Productos
        </Text>
      </View>

      <View style={styles.container}>
        {
          lista.map((list) => (
            <TouchableOpacity key={list.id}>
              <View style={styles.contenedornoticias}>
              <Text style={styles.datos}> 
                {list.nombre}
              </Text>
              </View>
              <View style={styles.contenedornoticias}>
                <Text style={styles.datos}>
                {list.color}
                </Text>
              </View>
              <View style={styles.contenedornoticias}>
                <Text style={styles.datos}>
              {list.stock}
              </Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
    padding:20,
  },
  agregarproducto: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'cyan',
    padding:20,
    borderColor:'black',
    borderWidth:1,
  },
  textobotonagregar: {
    textAlign:'center',
    fontSize:20,
  },
  titulo:{
    textAlign:'center',
    padding:10,
    fontSize:25,
  },
  datos:{
    fontSize:20,
    textAlign:'center',
  },
  contenedornoticias: {
    padding:2,
    backgroundColor:'gray',
    width: Dimensions.get('screen').width * 10,
  },
}) 








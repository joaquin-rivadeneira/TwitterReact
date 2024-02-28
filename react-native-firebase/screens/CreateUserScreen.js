import React, { cloneElement, useState,  } from 'react'
import { Text, View, Button, TextInput, ScrollView, StyleSheet, Alert } from "react-native";

//Conexion Con Firebase 
import FireBD from '../database/firebase'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const db = getFirestore(FireBD)

export default function CreateUserScreen({navigation}) {

    const initialState = {
        nombre: '',
        color: '',
        stock: ''
    }

    const [state, setState] = useState(initialState)
    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value })
    }

    const PublicarNoticia = async () => {
        
            await addDoc(collection(db, 'productos'), {
                ...state
            })

            Alert.alert('Noticias', 'Noticia publicada con exito')
    }

    return (
        <ScrollView style={formulario}>
            <View style={inputs}>
                <TextInput placeholder='nombre' onChangeText={(value) => handleChangeText(value, 'nombre')}
                    value={state.nombre}
                />
            </View>

            <View style={inputs}>
                <TextInput placeholder='color' onChangeText={(value) => handleChangeText(value, 'color')}
                    value={state.color}
                />

            </View>
            <View style={inputs}>
                <TextInput placeholder='stock' onChangeText={(value) => handleChangeText(value, 'stock')}
                    value={state.stock}
                />
            </View>

            <View>
                <Button title="Publicar Noticia" onPress={PublicarNoticia}/>
            </View>
            <View>
                <Button title="Lista de usuarios" onPress={()=>navigation.navigate("Tweets")}/>
            </View>
        </ScrollView>
    )
}

const inputs = StyleSheet.create({
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
})

const formulario = StyleSheet.create({
    flex: 1,
    padding: 35
})


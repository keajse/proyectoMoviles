import React, { useState } from 'react';
import { View, Image, StatusBar, TextInput, Text, Button, TouchableOpacity, ScrollView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../reservas/ReservasStyle';
import Colors from '../../../shared/color/Colors'

const ReservasScreen = ({route, navigation}) => {

    console.log(route.params)
    
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [numPersonas, setNumPersonas] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFinal, setFechaFinal]= useState("");
    const [tipoPaquete, setTipoPaquete] = useState("");

    const sendReserva = async () => {
        const response = await fetch('https://lauraserranoapi.herokuapp.com/reserva/nueva', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                numPersonas: numPersonas,
                fechaInicio: fechaInicio,
                fechaFinal: fechaFinal,
                tipoPaquete: tipoPaquete
            })
        });
        const responseJson = await response.json;
        console.log(response)
        Alert.alert("Registro generado")
        navigation.navigate("consulta")
    }

    
    return <ScrollView style={Styles.container}>
        <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
        <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.icontainer}>
            <Image source={require('../login/img/bird.png')} />
            <Text style={Styles.title}>Reserva</Text>
        </LinearGradient>
        
        <View style={Styles.inputDataContainer}>
            <TextInput style={Styles.inputDataUser} placeholder="Nombre" inlineImageLeft='outline_account_circle_black_18' inlineImagePadding={20} onChangeText={(text) =>setNombre(text)}></TextInput>
            <TextInput style={Styles.inputDataUser} placeholder="Apellido" inlineImageLeft='outline_contact_mail_black_18' inlineImagePadding={20} onChangeText={(text) =>setApellido(text)}></TextInput>
            <TextInput style={Styles.inputDataUser} placeholder="Teléfono" inlineImageLeft='outline_support_agent_black_18' inlineImagePadding={20} onChangeText={(text) =>setTelefono(text)}></TextInput>
            <TextInput style={Styles.inputDataUser} placeholder="Número de personas" inlineImageLeft='outline_vpn_key_black_18' inlineImagePadding={20} onChangeText={(text) =>setNumPersonas(text)}></TextInput>
            <TextInput style={Styles.inputDataUser} placeholder="Fecha de inicio" inlineImageLeft='outline_vpn_key_black_18' inlineImagePadding={20} onChangeText={(text) =>setFechaInicio(text)}></TextInput>
            <TextInput style={Styles.inputDataUser} placeholder="Fecha Final" inlineImageLeft='outline_vpn_key_black_18' inlineImagePadding={20} onChangeText={(text) =>setFechaFinal(text)}></TextInput>
            <TextInput style={Styles.inputDataUser} placeholder="Tipo de paquete (Dorado, Plata)" inlineImageLeft='outline_vpn_key_black_18' inlineImagePadding={20} onChangeText={(text) =>setTipoPaquete(text)}></TextInput>

        </View>
        <TouchableOpacity onPress={() => sendReserva()}>

            <LinearGradient style={Styles.loginButton} colors={[Colors.primaryColor, Colors.secondaryColor]}>
                <Text style={Styles.textLoginButton}>Reservar</Text>
            </LinearGradient>

        </TouchableOpacity>

    </ScrollView>
}



export default ReservasScreen;
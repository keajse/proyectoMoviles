import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput , Alert} from 'react-native';
import DetalleReservaStyles from './DetalleReservaStyles'

const DetalleReservaScreen = ({ route, navigation }) => {
    //console.log(route.params)
    const { _id, nombre, apellido, numPersonas, fechaInicio, fechaFinal, tipoPaquete } = route.params.reserva;

    const editReserva = async () => {
        const response = await fetch('https://lauraserranoapi.herokuapp.com/reserva/editar/', {
            method: 'PUT',
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
        const jsonResponse = await response.json();
        console.log(jsonResponse)
    }

    const deleteReserva = async (_id) => {
        const response = await fetch('https://lauraserranoapi.herokuapp.com/reserva/eliminar/', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id,
            })
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse)
        Alert.alert("Registro eliminado")
    }

    return (
            <View style={DetalleReservaStyles.container}>
                <View style={DetalleReservaStyles.containerImage}>
                    <Text>Sean Santos como vuestro Padre Celestial es Santo</Text>
                    <Image source={require('./img/santos.jpg')} style={{ width: 100, height: 100 }} />
                </View>
                <View style={DetalleReservaStyles.containerUserData}>
                    <Text>Id: {_id}</Text>
                    <Text>Nombre: {nombre}</Text>
                    <Text>Apellido: {apellido}</Text>
                    <Text>Número de personas: {numPersonas}</Text>
                    <TextInput>Fecha Inicio: {fechaInicio}</TextInput>
                    <TextInput>Fecha Final: {fechaFinal}</TextInput>
                    <Text>Tipo de paquete: {tipoPaquete}</Text>
                </View>

                <View style={DetalleReservaStyles.button}>
                    <TouchableOpacity style={DetalleReservaStyles.opciones} onPress={() => editReserva()}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={DetalleReservaStyles.opciones} onPress={() => deleteReserva(_id)}>
                        <Text>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    export default DetalleReservaScreen;
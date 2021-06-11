import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import CardComponentStyle from './CardComponentStyle'


const CardComponent = (props) => {

    const { data } = props;

    return <ScrollView>
        <View styles={CardComponentStyle.container}>
            <View style={CardComponentStyle.containerImage}>
                <Image source={require('./img/user.jpg')} style={{ width: 50, height: 50 }} />
            </View>
            <View style={CardComponentStyle.containerUserData}> 
                <Text>Id: {data._id}</Text>
                <Text>Nombre: {data.nombre}</Text>
                <Text>Apellido: {data.apellido}</Text>
                <Text>Teléfono: {data.telefono}</Text>
                <Text>Número de personas: {data.numPersonas}</Text>
                <Text>Fecha Inicio: {data.fechaInicio}</Text>
                <Text>Fecha Final: {data.fechaFinal}</Text>
                <Text>Tipo Paquete: {data.tipoPaquete}</Text>
            </View>

        </View>


    </ScrollView>
}

export default CardComponent;
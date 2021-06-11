import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListUsersStyles from './ListUsersStyles';
import CardComponent from './components/CardComponent';



const ListUserScreen = ({navigation}) => {

    const [reserva, setReservas] = useState("");

    const getReservas = async () => {
        const response = await fetch('https://lauraserranoapi.herokuapp.com/reserva/consulta');
        const responseJson = await response.json();
        console.log(responseJson);
        
        setReservas(responseJson.data);
    }

    const reservaInfo=(reserva)=>{
        //Alert.alert("Paz y bien " + nombre);
        navigation.navigate("detalle",{
            reserva: reserva
        });
    }

    /*const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];*/

    useEffect(()=>{
        getReservas();
    }, []);

    return <ScrollView>
        <FlatList
            data={reserva}
            renderItem={({ item }) => <TouchableOpacity onPress={() =>reservaInfo(item)}>
                <CardComponent data={item}></CardComponent>
            </TouchableOpacity> }>


        </FlatList>
    </ScrollView>
}

export default ListUserScreen;
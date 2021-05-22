import React, { useEffect } from 'react';
import { View, Text, Flatlist } from 'react-native';



const ListUsers = () => {

    //const[ users, setUsers]= useState("");

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2');

        const jsonResponse = await response.json();
        //setUsers(jsonResponse.data);
        console.log(jsonResponse.data);
    }

    /*const Item = () => {
        return <Text>Item</Text>
    }*/

    useEffect(() => {
        getUsers();
    }, []);
    return <View>
        <Text>Gracias Dios</Text>
    </View>
}

export default ListUsers;
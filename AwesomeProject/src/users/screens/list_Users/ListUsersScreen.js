import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListUsersStyles from './ListUsersStyles';



const ListUsers = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2');

        const jsonResponse = await response.json();
        setUsers(jsonResponse.data);
        //console.log(jsonResponse.data);
    }

    const Item = (props) => {
        console.log(props);

        user = props.user;
        return <Text>{user.first_name}</Text>

        //user = props.user;
        //position = props.position;
        //return <Text>Item</Text>
    }

    useEffect(() => {
        getUsers();
    }, []);

    return <View style={ListUsersStyles.container}>
        <FlatList data={users} renderItem={({item, index}) => <Item user={item} position={index}></Item>}></FlatList>
    </View>
}

export default ListUsers;
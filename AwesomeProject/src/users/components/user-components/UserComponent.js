import React from 'react';
import {View, Text, Image} from 'react-native';
import UserComponentStyles from './UserComponentStyles';

const UserComponent = (props) => {
    
        user = props.user;
       // return <Text>{user.first_name}</Text>

        return (
            <View style={UserComponentStyles.container}>
                <Image source={{ uri: user.avatar }} style={{ width: 400, height: 400 }}>

                </Image>
                <Text>{user.first_name}</Text>
            </View>
        )
       
    
}

export default UserComponent;
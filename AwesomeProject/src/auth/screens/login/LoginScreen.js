import React from 'react';
import { View, Image, StatusBar, TextInput, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './LoginStyles';
import Colors from '../../../../shared/color/Colors';

const LoginScreen = () => {

  
  return <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
    <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.icontainer}>
      <Image source={require('./img/bird.png')} />
      <Text style={Styles.title}>Login</Text>
    </LinearGradient>
    <View style={Styles.inputDataContainer}>
      <TextInput style={Styles.inputDataUser} placeholder="Email"></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Password"></TextInput>

    </View>    

  </View >
}



export default LoginScreen;
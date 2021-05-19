import React from 'react';
import { View, Image, StatusBar, TextInput, Text, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../login/LoginStyles';
import Colors from '../../../../shared/color/Colors'

const RegisterScreen = () => {

  
  return <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
    <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.icontainer}>
      <Image source={require('../login/img/bird.png')} />
      <Text style={Styles.title}>Register</Text>
    </LinearGradient>
    <View style={Styles.inputDataContainer}>
      <TextInput style={Styles.inputDataUser} placeholder="Fullname"></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Email"></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Phone Number"></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Password"></TextInput>

    </View>  
    <Button style={Styles.inputDataUser} title="Register"></Button>

  </View >
}



export default RegisterScreen;
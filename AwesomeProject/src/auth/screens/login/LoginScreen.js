import React, { useState } from 'react';
import { View, Image, StatusBar, TextInput, Text, TouchableHighlight, Alert, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './LoginStyles';
import Colors from '../../../shared/color/Colors';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Todos los campos deben estar llenos");
    }
    else {

      navigation.navigate("Reservas", {
        email: email
      });
      setEmail("");
      setPassword("");
    }
  }

  const register = () => {
    navigation.navigate("Register")
  }

  const consultar = () => {
    navigation.navigate("ListUsers")
  }

  const getReserva = async () => {
    const response = await fetch('https://lauraserranoapi.herokuapp.com/reserva/consulta');

    const responseJson = await response.json();
    console.log(responseJson)

  }

  return <ScrollView style={Styles.container}>
    <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
    <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.icontainer}>
      <Image source={require('./img/bird.png')} />
      <Text style={Styles.title}>Login</Text>
    </LinearGradient>

    <View style={Styles.inputDataContainer}>
      <TextInput defaultValue={email} inlineImageLeft='outline_contact_mail_black_18' inlineImagePadding={20} style={Styles.inputDataUser} placeholder="Email" keyboardType="email-address" onChangeText={(text) => { setEmail(text) }}></TextInput>

      <Text>{email}</Text>

      <TextInput defaultValue={password} inlineImageLeft='outline_vpn_key_black_18' inlineImagePadding={20} style={Styles.inputDataUser} placeholder="Password" secureTextEntry={true} onChangeText={(text) => { setPassword(text) }}></TextInput>

      <Text></Text>

      <TouchableHighlight onPress={() => validateLogin()}>

        <LinearGradient style={Styles.loginButton} colors={[Colors.primaryColor, Colors.secondaryColor]}>
          <Text style={Styles.textLoginButton}>Login</Text>
        </LinearGradient>

      </TouchableHighlight>

      <TouchableHighlight onPress={() => register()}>

        <LinearGradient style={Styles.loginButton} colors={[Colors.primaryColor, Colors.secondaryColor]}>
          <Text style={Styles.textLoginButton}>Registrarse</Text>
        </LinearGradient>

      </TouchableHighlight>

      <TouchableHighlight onPress={() => consultar()}>

        <LinearGradient style={Styles.loginButton} colors={[Colors.primaryColor, Colors.secondaryColor]}>
          <Text style={Styles.textLoginButton}>Consultar</Text>
        </LinearGradient>

      </TouchableHighlight>

    </View>

  </ScrollView >
}



export default LoginScreen;
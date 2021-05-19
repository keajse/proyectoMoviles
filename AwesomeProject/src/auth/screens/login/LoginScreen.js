import React from 'react';
import { View, Image, StatusBar, TextInput, Text, TouchableHighlight } from 'react-native';
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
      <TextInput inlineImageLeft='outline_contact_mail_black_18' inlineImagePadding={20} style={Styles.inputDataUser} placeholder="Email" keyboardType="email-address"></TextInput>
      <TextInput inlineImageLeft='outline_vpn_key_black_18' inlineImagePadding={20} style={Styles.inputDataUser} placeholder="Password"></TextInput>
      <TouchableHighlight>
        <LinearGradient style={Styles.loginButton} colors={[Colors.primaryColor, Colors.secondaryColor]}>
          <Text style={Styles.textLoginButton}>Login</Text>
        </LinearGradient>
      </TouchableHighlight>

    </View>

  </View >
}



export default LoginScreen;
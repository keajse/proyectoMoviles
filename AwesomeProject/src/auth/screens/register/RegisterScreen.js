import React from 'react';
import { View, Image, StatusBar, TextInput, Text, Button, TouchableOpacity} from 'react-native';
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
      <TextInput style={Styles.inputDataUser} placeholder="Fullname" inlineImageLeft='outline_account_circle_black_18' inlineImagePadding={20}></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Email" inlineImageLeft='outline_contact_mail_black_18' inlineImagePadding={20}></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Phone Number" inlineImageLeft='outline_support_agent_black_18' inlineImagePadding={20}></TextInput>
      <TextInput style={Styles.inputDataUser} placeholder="Password" inlineImageLeft='outline_vpn_key_black_18' inlineImagePadding={20}></TextInput>

    </View>  
    <TouchableOpacity>
        <LinearGradient style={Styles.loginButton} colors={[Colors.primaryColor, Colors.secondaryColor]}>
          <Text style={Styles.textLoginButton}>Register</Text>
        </LinearGradient>
      </TouchableOpacity>

  </View >
}



export default RegisterScreen;
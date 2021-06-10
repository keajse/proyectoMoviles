import React from 'react';
import { View, Image, StatusBar, Text, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../login/LoginStyles';
import Colors from '../../../shared/color/Colors'

const ApartmentsScreen = ({navigation}) => {
  

  return <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>

    <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.icontainer}>
      <Image source={require('../apartments/img/japon.jpg')} />
      <Text style={Styles.title}>Welcome</Text>      
    </LinearGradient>   
        

  </View >
}



export default ApartmentsScreen;
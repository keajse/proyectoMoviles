import React from 'react';
import { View, Image, StatusBar, Text, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from '../login/LoginStyles';
import Colors from '../../../../shared/color/Colors'

const HomeScreen = ({navigation}) => {

  const goToLogin =() => {
    navigation.navigate('Login');
  }

  return <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
    <LinearGradient colors={[Colors.primaryColor, Colors.secondaryColor]} style={Styles.icontainer}>
      <Image source={require('../login/img/bird.png')} />
      <Text style={Styles.title}>Paz y bien</Text>      
    </LinearGradient>   
    <Button title="Go to login" onPress={()=>goToLogin()}></Button> 

  </View >
}



export default HomeScreen;
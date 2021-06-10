import React, {useEffect} from 'react';
import { Image, StatusBar, ActivityIndicator } from 'react-native';

import Colors from '../../../shared/color/Colors';
import SplashStyles from './SplashStyles';

import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {

    const waitingTimeSplash = () => {
        setTimeout(() =>{
            navigation.navigate('Login')
        }, 4000);
    }

    useEffect(() => {
        waitingTimeSplash();
    }, []);

    return <LinearGradient
        colors={[Colors.primaryColor, Colors.secondaryColor]}
        style={SplashStyles.container}>
        <StatusBar backgroundColor={Colors.primaryColor}></StatusBar>
        <Image source={require('./img/pazybien.jpg')}
            style={{ width: 250, height: 250 }} />
        <ActivityIndicator size="large" color="while"></ActivityIndicator>
    </LinearGradient>
}

export default SplashScreen;

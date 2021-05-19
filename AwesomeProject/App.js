import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/login/LoginScreen';
import HomeScreen from './src/auth/screens/home/HomeScreen';
import RegisterScreen from './src/auth/screens/register/RegisterScreen';


const Stack = createStackNavigator(); //Incializa la navegación.

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name="Register" component={RegisterScreen} />
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="Login" component={LoginScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
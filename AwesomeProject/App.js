import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/login/LoginScreen';
import HomeScreen from './src/auth/screens/home/HomeScreen';
import RegisterScreen from './src/auth/screens/register/RegisterScreen';
import ApartmentsScreen from './src/auth/screens/apartments/ApartmentsScreen';
import SplashScreen from './src/splash/screens/splass_screen/SplashScreen';
import ListUsers from './src/users/screens/list_Users/ListUsersScreen';
import ReservasScreen from './src/auth/screens/reservas/ReservasScreen';
import ListUsersScreen from './src/users/screens/list_Users/ListUsersScreen';
import DetalleReservaScreen from './src/auth/screens/detalle/DetalleReservaScreen';




const Stack = createStackNavigator(); //Incializa la navegación.

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Reservas" component={ReservasScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Apartments" component={ApartmentsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListUsers" component={ListUsersScreen} options={{ headerShown: false }} />   
        <Stack.Screen name="detalle" component={DetalleReservaScreen} options={{ headerShown: false }} />     


      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
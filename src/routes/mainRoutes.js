import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashscreen/index';

const Stack = createNativeStackNavigator();

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen name="splashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

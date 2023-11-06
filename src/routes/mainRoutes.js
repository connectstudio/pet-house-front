import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/splashscreen/index";
import ChoiceRegister from "../screens/choice-register";
import Login from "../screens/login/index";

const Stack = createNativeStackNavigator();

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        drawerContent={props => <DrawerMenuContentApp {...props}/>}
        initialRouteName='login'
        screenOptions={{
          headerTitle: '',
          
          headerShown: false,
        }}>
        <Stack.Screen name="splashScreen" component={SplashScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="choiceRegister" component={ChoiceRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

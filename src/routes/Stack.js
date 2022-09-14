import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from '../screens/Splash'
import Home from '../screens/Home'
import Auth from './Auth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='splash' component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name='auth' component={Auth} options={{ headerShown: false }} />
      <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator
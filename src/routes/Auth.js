import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Auth = createNativeStackNavigator();

const Authentication = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen name='login' component={Login} options={{ headerShown: false}} />
            <Auth.Screen name='signUp' component={SignUp} options={{ headerShown: false }} />
        </Auth.Navigator>
    )
}

export default Authentication
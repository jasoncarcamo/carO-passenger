import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import LogInScreen from "./LogInScreen";
import SignUpScreen  from "./SignUpScreen";

export default class AuthStack extends React.Component{
    render(){
        return (
            <Stack.Navigator>
                <Stack.Screen name="log_in" component={LogInScreen}></Stack.Screen>
                <Stack.Screen name="sign_off" component={SignUpScreen}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}
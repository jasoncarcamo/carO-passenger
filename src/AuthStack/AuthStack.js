import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import LogInScreen from "./LogInScreen";
import SignUpScreen  from "./SignUpScreen";

export default class AuthStack extends React.Component{

    refreshApp = ()=>{
        this.props.refreshApp();
    }

    render(){
        return (
            <Stack.Navigator>
                <Stack.Screen name="log_in">
                    {(props)=><LogInScreen {...props} refreshApp={this.refreshApp}/>}
                </Stack.Screen>
                <Stack.Screen name="sign_up">
                    {(props)=> <SignUpScreen {...props} refreshApp={this.refreshApp}/>}
                </Stack.Screen>
            </Stack.Navigator>
        );
    }
}
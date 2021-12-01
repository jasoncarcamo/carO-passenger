import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LogInScreen from "./LogInScreen";
import SignUpScreen  from "./SignUpScreen";
import TokenService from "../../services/TokenService";

const Stack = createNativeStackNavigator();

export default class AuthStack extends React.Component{

    async componentDidMount(){
        const token = await TokenService.hasToken();

        if(token){
            this.props.navigation.navigate("Passenger");
        };
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
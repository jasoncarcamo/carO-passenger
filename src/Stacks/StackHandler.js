import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AuthStack from "./AuthStack/AuthStack";
import PassengerStack from "./PassengerStack/PassengerStack";
import PassengerStorage from "../services/PassengerStorage";

const Stack = createNativeStackNavigator();

export default class StackHandler extends React.Component{
    render(){
        return (
            <Stack.Navigator>
                <Stack.Screen name="Authorize" component={AuthStack}></Stack.Screen>
                <Stack.Screen name="Passenger" component={PassengerStack}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}
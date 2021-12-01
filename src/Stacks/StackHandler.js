import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AuthStack from "./AuthStack/AuthStack";
import PassengerStack from "./PassengerStack/PassengerStack";
import PassengerStorage from "../services/PassengerStorage";

const Stack = createNativeStackNavigator();

export default class StackHandler extends React.Component{
    render(){
        console.log("Refreshed");
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Authorize" component={AuthStack}></Stack.Screen>
                <Stack.Screen name="Passenger" component={PassengerStack}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}
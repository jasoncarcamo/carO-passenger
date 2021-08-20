import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default class PassengerStack extends React.Component{
    render(){
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
            </Drawer.Navigator>
        );
    }
}
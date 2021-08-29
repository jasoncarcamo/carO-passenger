import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import LogOffScreen from "./screens/LogOffScreen";

const Drawer = createDrawerNavigator();

export default class PassengerStack extends React.Component{

    refreshApp = ()=>{
        this.props.refreshApp();
    }

    render(){
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home">
                    {(props)=> <HomeScreen {...props} refreshApp={this.refreshApp}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Log Off">
                {(props)=> <LogOffScreen {...props} refreshApp={this.refreshApp}/>}
                </Drawer.Screen>
            </Drawer.Navigator>
        );
    }
}
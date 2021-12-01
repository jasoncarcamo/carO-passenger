import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import LogOffScreen from "./screens/LogOffScreen";
import TokenService from "../../services/TokenService";

const Drawer = createDrawerNavigator();

export default class PassengerStack extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: ""
        }
    }

    async componentDidMount(){
        const token = await TokenService.getToken();

        if(!token){
            this.props.navigation.navigate("Authorize");
        };

        this.setState({
            token
        });
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
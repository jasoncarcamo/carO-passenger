import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import TokenService from "../../../services/TokenService";
import PassengerStorage from "../../../services/PassengerStorage";
import Map from "../components/Map";
import AddressBar from "../components/AddressBar";

export default class homeScreen extends React.Component{
    handleLogOut = ()=>{
        TokenService.removeToken()
            .then( removedToken => {
                PassengerStorage.removePassenger()
                    .then( removedPassenger => {
                        this.props.refreshApp();
                    });
            });
    }

    render(){
        return (
            <View>
                <Text>Home</Text>
                <Map/>
            </View>
        );
    }
}
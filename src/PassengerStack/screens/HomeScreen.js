import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import TokenService from "../../services/TokenService";

export default class homeScreen extends React.Component{
    handleLogOut = ()=>{
        TokenService.removeToken()
            .then( tokenRemoved => {
                this.props.refreshApp();
            });
    }
    render(){
        return (
            <View>
                <Text>Home</Text>

                <TouchableOpacity
                    onPress={this.handleLogOut}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
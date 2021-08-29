import React from "react";
import {Text, View, TouchableOpacity} from "react-native";
import TokenService from "../../services/TokenService";

export default class LogOffScreen extends React.Component{
    removeToken = ()=>{
        TokenService.removeToken()
            .then( removedToken => {
                this.props.refreshApp();
            });
    }

    goBack = ()=>{
        this.props.navigation.goBack();
    }

    render(){
        return (
            <View>
                <Text>Are you sure you want to log off?</Text>

                <View>
                    <TouchableOpacity
                        onPress={this.removeToken}
                    >
                        <Text>Yes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.goBack}
                    >
                        <Text>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

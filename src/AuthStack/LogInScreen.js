import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import TokenService from "../services/TokenService";
import PassengerAuth from "../services/PassengerAuth";
import PassengerStorage from "../services/PassengerStorage";

export default class LogInScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    handleEmail = (text)=>{
        this.setState({
            email: text
        });
    }

    handlePassword = (text)=>{
        this.setState({
            password: text
        });
    }

    handleLogIn = ()=>{
        const passenger = {
            email: this.state.email,
            password: this.state.password
        };

        PassengerAuth.signIn(passenger)
            .then( passengerInfo => {
                TokenService.saveToken(passengerInfo.token)
                    .then( savedToken => {
                        PassengerStorage.setPassenger(passengerInfo.dbPassenger)
                            .then(savedPassenger => {
                                this.props.refreshApp();
                            });
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    goRegister = ()=>{
        this.props.navigation.navigate("sign_up");
    }

    render(){
        return(
            <View>
                <Text>Log into your account!</Text>

                <Text>
                    Don't have an account? 
                    <TouchableOpacity
                        onPress={this.goRegister}
                    >
                        <Text> Register</Text>
                    </TouchableOpacity>
                </Text>

                <TextInput
                    value={this.state.email}
                    onChangeText={this.handleEmail}
                    placeholder="Email"
                ></TextInput>

                <TextInput
                    value={this.state.password}
                    onChangeText={this.handlePassword}
                    placeholder="Password"
                    secureTextEntry={true}
                ></TextInput>

                <TouchableOpacity
                onPress={this.handleLogIn}>
                    <Text>Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
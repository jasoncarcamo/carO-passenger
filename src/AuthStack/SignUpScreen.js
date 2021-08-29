import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import PassengerAuth from "../services/PassengerAuth";
import TokenService from "../services/TokenService";

export default class SignUpScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            mobile_number: "",
            password: "",
            email: "",
            home_address: "",
            work_address: "",
            trip_redemption: 0,
            member: false,
            date_created: "",
            error: ""
        }
    }
    handleFirstName = (text)=>{
        this.setState({
            first_name: text
        });
    }

    handleLastName = (text)=>{
        this.setState({
            last_name: text
        });
    }

    handleMobileNumber = (text)=>{
        this.setState({
            mobile_number: text
        });
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

    handleHomeAddress = (text)=>{
        this.setState({
            home_address: text
        });
    }

    handleWorkAddress = (text)=>{
        this.setState({
            work_address: text
        });
    }

    handleRegister = ()=>{
        const newPassenger = this.state;

        delete newPassenger.error;

        newPassenger.date_created = new Date();

        PassengerAuth.register(newPassenger)
            .then( passengerInfo => {
                console.log(passengerInfo);
                TokenService.saveToken(passengerInfo.token)
                    .then( savedToken => {
                        this.props.navigation.navigate("Root", {
                            screen: "Home"
                        });
                    })
            })
            .catch(err => {
                console.log(err);
            });
    }

    goLogIn = ()=>{
        this.props.navigation.navigate("log_in");
    }

    render(){
        return (
            <View>
                <Text>Register Today!</Text>
                <Text>
                    Already have an account?
                    <TouchableOpacity
                        onPress={this.goLogIn}    
                    >
                        <Text> Log In</Text>
                    </TouchableOpacity>
                </Text>

                <TextInput
                    value={this.state.first_name}
                    onChangeText={this.handleFirstName}
                    placeholder="First name"
                ></TextInput>

                <TextInput
                    value={this.state.last_name}
                    onChangeText={this.handleLastName}
                    placeholder="Last name"
                ></TextInput>

<               TextInput
                    value={this.state.mobile_number}
                    onChangeText={this.handleMobileNumber}
                    placeholder="Mobile number"
                ></TextInput>

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

                <TextInput
                    value={this.state.home_address}
                    onChangeText={this.handleHomeAddress}
                    placeholder="Home address"
                ></TextInput>

                <TextInput
                    value={this.state.work_address}
                    onChangeText={this.handleWorkAddress}
                    placeholder="Work address"
                ></TextInput>

                <TouchableOpacity
                    onPress={this.handleRegister}
                >
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
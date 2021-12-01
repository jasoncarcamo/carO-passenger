import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./src/AuthStack/AuthStack";
import PassengerStack from './src/PassengerStack/PassengerStack';
import TokenService from './src/services/TokenService';"./src/services/TokenService";

import LocationContext, { LocationProvider } from './src/contexts/LocationContext';
import AppContext, { AppProvider } from './src/contexts/AppContext';
import PassengerContext, {PassengerProvider} from './src/contexts/PassengerContext';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token: ""
        }
    }

    async componentDidMount(){
        let token = await TokenService.hasToken();

        if(token){
            this.setToken(token);
        } else{
            this.removeToken();
        }
    }

    refreshApp = ()=>{
        this.componentDidMount();
    }

    setToken = (token)=>{
        this.setState({
            token
        });
    }

    removeToken =()=>{
        this.setState({
            token: ""
        });
    }

    render(){
        return (
            <NavigationContainer>
                <LocationProvider>
                    <LocationContext.Consumer>
                        { locationContext => (
                            <PassengerProvider>
                                <PassengerContext.Consumer>
                                    { passengerContext => (
                                        <AppProvider
                                            locationContext={locationContext}
                                            passengerContext={passengerContext}
                                        />
                                    )}
                                </PassengerContext.Consumer>
                            </PassengerProvider>
                        )}
                    </LocationContext.Consumer>
                </LocationProvider>
            </NavigationContainer>
        );
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

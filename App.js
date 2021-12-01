import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import TokenService from './src/services/TokenService';"./src/services/TokenService";
import ContextContainer from './src/contexts/ContextContainer';
import StackHandler from './src/Stacks/StackHandler';

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
                <ContextContainer>
                    <StackHandler/>
                </ContextContainer>
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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

export default class App extends React.Component{
    render(){
        return (
            <NavigationContainer>
                <View style={styles.container}>
                    <Text>Helloo from App container</Text>
                </View>
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

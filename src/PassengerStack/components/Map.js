import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {View, StyleSheet, Dimensions, Alert} from "react-native";

export default class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: "",
            longitude: "",
            error: ""
        }
    }

    regionChange = (region)=>{
        console.log(region)
    }

    render(){
        return (
            
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                    }}
                    onRegionChangeComplete={this.regionChange}
                    style={styles.map}
                >
                </MapView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        zIndex:20,
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
  });
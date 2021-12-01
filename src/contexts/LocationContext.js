import React from "react";
import * as Location from "expo-location";
import {Alert} from "react-native";

const LocationContext = React.createContext();

export default LocationContext;

export class LocationProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: "",
            longitude: "",
            error: ""
        };
    }

    async componentDidMount(){
        let {status} = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
            this.setState({
                error: "Permission to access location was denied"
            });

            return;
        };

        this.setCooridates();
    }

    setCooridates = async ()=>{

        setInterval(async ()=>{
            let location = await Location.getCurrentPositionAsync({});
            
            this.setState({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        }, 5500);
    }

    render(){
        const value = this.state;
        return (
            <LocationContext.Provider value={value}>
                {this.props.children}
            </LocationContext.Provider>
        )
    }
}

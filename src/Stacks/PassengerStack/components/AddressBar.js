import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class AddressBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address: ""
        }
    }

    handleAddress = ()=>{

    }

    render(){
        return (
            <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
            }}
            query={{
                key: 'AIzaSyAJIoY1vqB3zSesYMXws7_2F4G6e8g2L2k',
                language: 'en',
            }}
            />
        )
    }
};

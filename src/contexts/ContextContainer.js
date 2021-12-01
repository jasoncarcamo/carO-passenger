import React from "react";
import LocationContext, {LocationProvider} from "./LocationContext";
import PassengerContext, {PassengerProvider} from "./PassengerContext";
import AppContext, {AppProvider} from "./AppContext";

export default class ContextContainer extends React.Component{
    render(){
        return (
            <LocationProvider>
                <LocationContext.Consumer>
                    { locationContext => (
                        <PassengerProvider>
                            <PassengerContext.Consumer>
                                { passengerContext => (
                                    <AppProvider
                                        locationContext={locationContext}
                                        passengerContext={passengerContext}
                                    >
                                        {this.props.children}
                                    </AppProvider>
                                )}
                            </PassengerContext.Consumer>
                        </PassengerProvider>
                    )}
                </LocationContext.Consumer>
            </LocationProvider>
        );
    }
};
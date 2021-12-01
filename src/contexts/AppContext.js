import React from "react";

const AppContext = React.createContext({
    locationContext: {}
});

export default AppContext;

export class AppProvider extends React.Component{

    render(){
        const value = {
            locationContext: this.props.locationContext,
            passengerContext: this.props.passengerContext
        };

        return(
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
};
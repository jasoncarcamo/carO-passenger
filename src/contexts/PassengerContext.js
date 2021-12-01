import React from "react";
import { render } from "react-dom";

const defaultPassenger = {
    id: "",
    first_name: "",
    last_name: "",
    mobile_number: "",
    password: "",
    email: "",
    home_address: "",
    work_addreses: "",
    trip_redemption: "",
    member: false
};

const PassengerContext = React.createContext(defaultPassenger);

export default PassengerContext;

export class PassengerProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.setDefaultPassenger();
    }

    setDefaultPassenger = ()=>{
        const defaultState = defaultPassenger;

        defaultState.error = "";

        this.setState(defaultState);
    }

    render(){
        const value = this.state;

        rerturn (
            <PassengerContext.Provider value={value}>
                {this.props.children}
            </PassengerContext.Provider>
        );
    };
};
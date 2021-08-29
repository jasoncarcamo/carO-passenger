import TokenService from "./TokenService";

const PassengerAuth = {
    async signIn(passenger){
        try{
            const token = await TokenService.getToken();

            return fetch("http://localhost:8000/api/login-passenger", {
                method: "POST",
                headers:{
                    "content-type": "application/json",
                },
                body: JSON.stringify(passenger)
            })
                .then( res => {
                    if(!res.ok){
                        return res.json().then( e => Promise.reject(e));
                    };

                    return res.json();
                });
        }catch( error){

        };
    },
    async register(newPassenger){
        try{

            return fetch("http://localhost:8000/api/register-passenger", {
                method: "POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(newPassenger)
            })
                .then( res => {
                    if(!res.ok){
                        return res.json().then( e => Promise.reject(e));
                    };

                    return res.json();
                });
        }catch( error){

        };
    }
};

export default PassengerAuth;
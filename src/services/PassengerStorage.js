import AsyncStorage from "@react-native-async-storage/async-storage";

const PassengerStorage = {
    async hasPassenger(){
        return await this.getPassenger();
    },
    async getPassenger(){
        try{
            const passenger = await AsyncStorage.getItem("passenger");

            passenger = JSON.parse(passenger);

            return passenger; 
        } catch(error){
            return error;
        }
    },
    async setPassenger(newPassenger){
        try{
            const passenger = JSON.stringify(newPassenger);

            await AsyncStorage.setItem("passenger", passenger);

            passenger = JSON.parse(passenger);

            return passenger
        } catch(error){
            return error;
        };
    },
    async updatePassenger(passenger){
        return await this.setPassenger(passenger);
    },
    async removePassenger(){
        return await AsyncStorage.removeItem("passenger");
    }
};

export default PassengerStorage;
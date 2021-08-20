import AsyncStorage from "@react-native-async-storage/async-storage";

const PassengerStorage = {
    async hasPassneger(){
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
        const passenger = JSON.stringify(newPassenger);

        return await AsyncStorage.setItem("passenger", passenger);
    },
    async updatePassenger(passenger){
        return await this.setPassenger(passenger);
    },
    async removePassnger(){
        return await AsyncStorage.removeItem("passenger");
    }
};

export default PassengerStorage;
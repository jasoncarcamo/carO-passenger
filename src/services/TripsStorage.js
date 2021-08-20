import AsyncStorage from "@react-native-async-storage/async-storage";

const TripStorage = {
    async hasTrip(){
        return await this.getTrips();
    },
    async getTrips(){
        return await AsyncStorage.getItem("trips")
    },
    async setTrips(newTrips){
        const trips = JSON.stringify(newTrips);

        return AsyncStorage.setItem("trips", trips);
    },
    async removeTrips(){
        return await AsyncStorage.removeItem("trips");
    }    
};

export default TripStorage;
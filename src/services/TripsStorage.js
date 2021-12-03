import AsyncStorage from "@react-native-async-storage/async-storage";

const TripStorage = {
    defaultTrip = {
        pick_up_address: "",
        drop_off_address: "",
        pick_up_zip_code: "",
        pick_up_lat: "",
        pick_up_lng: "",
        drop_off_lat: "",
        drop_off_lng: "",
        drop_off_zip_code: "",
        distance: "",
        duration: "",
        price: "",
        scheduled: "",
        scheduled_date_time: "",
        time_requested: "",
        date_created: ""
    },
    async hasCurrentTrip(){
        return await this.getCurrentTrip();
    },
    async getCurrentTrip(){
        try{
            const currentTrip = await AsyncStorage.getItem("current-trip");

            currentTrip = JSON.parse(currentTrip);

            return currentTrip;
        } catch(err){
            return err;
        }
    },
    async setCurrentTrip(newTrip){
        try{
            const currentTrip = JSON.stringify(newTrip);

            return await AsyncStorage.setItem("current-trip", currentTrip);
        } catch(err){
            return err;
        }
    }, 
    async removeCurrentTrip(){
        try{
            return await AsyncStorage.removeItem("current-trip");
        } catch(err){
            return err;
        };
    },
    async hasTrip(){
        return await this.getTrips();
    }, 
    async getTrips(){
        try{
            let trips = await AsyncStorage.getItem("trips");

            trips = JSON.parse(trips);

            return trips;
        }catch(err){
            return err;
        };
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
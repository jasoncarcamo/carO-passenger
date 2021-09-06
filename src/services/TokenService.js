import AsyncStorage from "@react-native-async-storage/async-storage";

const TokenService = {
    async getToken(){
        return await AsyncStorage.getItem("passenger-token");
    },
    async hasToken(){
        return this.getToken();
    },
    async saveToken(token){
        return await AsyncStorage.setItem("passenger-token", token);
    },
    async updateToken(token){
        return this.saveToken(token);
    },
    async removeToken(){
        return await AsyncStorage.removeItem("passenger-token");
    }
};

export default TokenService;
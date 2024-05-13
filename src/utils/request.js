import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

export const baseURL = "https://muta-app.fastgenapp.com/";

// const jsonValue = await AsyncStorage.getItem("userTokens");
// let result = JSON.parse(jsonValue);

// console.warn(result.refresh);
export const request = axios.create({
  baseURL: baseURL,
  maxBodyLength: "infinity",
});

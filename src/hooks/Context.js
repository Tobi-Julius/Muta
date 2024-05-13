import React, { createContext, useState } from "react";
import axios from "axios";
export const UserContext = createContext();
import { Alert } from "react-native";

export const AuthProvider = ({ children }) => {
  const [currentUser, updateCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [learningInfo, updateLearningInfo] = useState({
    langUserSpeak: "",
    langToLearn: "",
    proficiency: "",
    userType: "",
  });

  const signUp = async (values) => {
    setLoading(true);
    let data = JSON.stringify({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      signinType: "password",
      spokenLanguage: "7d0f00aa-1028-4871-abc1-0237dff35356",
      userType: "learner",
      country: {
        name: "Nigeria",
        code: "NG",
        flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://muta-app.fastgenapp.com/create-user",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setLoading(false);
        updateCurrentUser(JSON.stringify(response.data));
      })
      .catch((error) => {
        setLoading(false);
        // console.log(error);
        Alert.alert("Login Error", "An error occured", [
          { text: "OK", onPress: () => {} },
        ]);
      });
  };

  const signIn = async (values) => {
    setLoading(true);
    let data = JSON.stringify({
      email: values.email,
      password: values.password,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://muta-app.fastgenapp.com/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setLoading(false);
        updateCurrentUser(JSON.stringify(response.data));
      })
      .catch((error) => {
        setLoading(false);
        // console.warn(error.message);
        Alert.alert("Login Error", "An error occured", [
          { text: "OK", onPress: () => {} },
        ]);
      });
  };

  return (
    <UserContext.Provider
      value={[
        currentUser,
        updateCurrentUser,
        signIn,
        signUp,
        updateLearningInfo,
        learningInfo,
        loading,
      ]}
    >
      {children}
    </UserContext.Provider>
  );
};

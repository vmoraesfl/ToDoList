import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

//axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.baseURL = "http://10.0.2.2:8000";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function asynclog(email, password) {
    try {
      const response = await axios.post("/api/sanctum/token", {
        email: email,
        password: password,
        device_name: "mobile",
      });

      const userResponse = {
        email: response.data.user.email,
        token: response.data.token,
      };
      console.log("foi");
      setUser(userResponse);
      setError(null);
      SecureStore.setItemAsync("user", JSON.stringify(userResponse));

      return userResponse;
    } catch (error) {
      console.log("error da async", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,

        login: (email, password) => {
          console.log("tentou login");
          console.log(axios.defaults.baseURL);
          asynclog(email, password);
        },
        logout: () => {
          setUser(null);
          SecureStore.deleteItemAsync("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

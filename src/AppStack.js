import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./store";

import { AuthContext } from "./AuthProvider";
import { Button, Text, View } from "react-native";
import axios from "axios";
import ViewNotes from "./screens/ViewNotes";
import AddNotes from "./screens/AddNotes";

//axios.defaults.baseURL = 'http://127.0.0.1:8000';

const Stack = createStackNavigator();

function DashboardScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState(null);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

    axios
      .get("/api/user")
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Dashboard Screen Logged In View</Text>
      <Text>User: {user.email}</Text>
      <Text>User from Server: {name}</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        title="View Notes"
        onPress={() => navigation.navigate("ViewNotes")}
      />
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Text>User: {user.email}</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Button
        title="View Notes"
        onPress={() => navigation.navigate("ViewNotes")}
      />
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}

export const AppStack = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="ViewNotes" component={ViewNotes} />
          <Stack.Screen name="AddNotes" component={AddNotes} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </Provider>
  );
};

import React from "react";
import { Provider } from "react-redux";

import store from "../store";
import AddNotes from "../screens/AddNotes";
import TodoList from "../TodoList";
import { Button } from "react-native-paper";
import { View, Text } from "react-native";
import TestView from "../TestView";

const HomeTodo = () => (
  <Provider store={store}>
    <TestView />
    <TodoList />
  </Provider>
);

export default HomeTodo;

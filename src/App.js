import React from "react";
import { Provider } from "react-redux";

import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./navigation";

import store from "./store";

import TodoList from "./TodoList";

const App = () => (
  /* <Provider store={store}>
    <TodoList />
  </Provider> */
  <Provider store={store}>
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  </Provider>
);

export default App;

import React from "react";
import { Provider } from "react-redux";

import store from "../store";

import TodoList from "../TodoList";

const HomeTodo = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default HomeTodo;

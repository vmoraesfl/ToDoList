import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ViewNotes from "../screens/ViewNotes";
import AddNotes from "../screens/AddNotes";
import HomeTodo from "../screens/HomeTodo";
import LoginScreen from "../screens/LoginScreen";

const StackNavigator = createStackNavigator({
  ViewNotes: {
    screen: ViewNotes,
  },
  AddNotes: {
    screen: AddNotes,
  },
  HomeTodo: {
    screen: HomeTodo,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  initialRouteName: "HomeTodo",
  mode: "modal",
  headerShown: "false",
});

export default createAppContainer(StackNavigator);

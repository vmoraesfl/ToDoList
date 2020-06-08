import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  View,
  TextInput,
  FlatList,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Creators as TodoActions } from "./store/ducks/todos";

class TodoList extends Component {
  state = {
    newtodo: null,
  };
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ fontSize: 20, alignSelf: "center" }}
            placeholder="exemplo@provedor.com"
            value={this.state.newtodo}
            onChangeText={(newtodo) => this.setState({ newtodo })}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button
            color="orange"
            title="Add New Goal"
            onPress={() => {
              this.props.addTodo(this.state.newtodo);
              this.setState({ newtodo: null });
            }}
          />
          <FlatList
            data={this.props.todos}
            renderItem={(todo) => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    flex: 1,
                    alignSelf: "center",
                    textAlign: "center",
                    backgroundColor: "white",
                  }}
                  /*    style={{{todo.item.complete ? 
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid" : null
                  }}} */
                >
                  {todo.item.complete ? "completed" : todo.item.text}
                </Text>
                <Button
                  title="toggle"
                  onPress={() => {
                    this.props.toggleTodo(todo.item.id);
                    console.log(this.props.todos);
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    this.props.removeTodo(todo.item.id);
                  }}
                >
                  <Image
                    style={styles.button}
                    source={require("../assets/close.png")}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fff",
  },
});

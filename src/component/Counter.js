import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Creators as TodoActions } from "../store/ducks/todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Counter(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total: {props.todos.length} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#242424",
  },
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    color: "#fff",
  },
  text: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

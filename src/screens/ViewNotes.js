import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List, Button } from "react-native-paper";
import Header from "../component/Header";
import { Creators as TodoActions } from "../store/ducks/todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TouchableOpacity } from "react-native-gesture-handler";

function ViewNotes(props) {
  const navigation = props.navigation;
  const [notes, setNotes] = useState([]);

  const addNotes = (note) => {
    note.id = notes.length + 1;
    setNotes([...notes, note]);
  };
  return (
    <View style={{ flex: 1 }}>
      <Header titleText="Simple Notes" />
      <View style={styles.container}>
        {props.todos.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You don't have any notes</Text>
          </View>
        ) : (
          <FlatList
            data={props.todos}
            renderItem={({ item }) => (
              <List.Item
                title={item.text}
                description={item.description}
                descriptionNumberOfLines={1}
                titleStyle={styles.listTittle}
                right={(itemProps) => (
                  <>
                    <TouchableOpacity onPress={() => props.removeTodo(item.id)}>
                      <List.Icon {...itemProps} icon="close" />
                    </TouchableOpacity>
                  </>
                )}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}

        <FAB
          style={styles.fabright}
          small
          icon="circle"
          label="Moraesinho"
          onPress={() => navigation.navigate("HomeTodo")}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add new notes"
          onPress={() => navigation.navigate("AddNotes", { addNotes })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: { position: "absolute", margin: 10, right: 0, bottom: 10 },
  fabright: {
    backgroundColor: "purple",
    position: "absolute",
    margin: 10,
    left: 0,
    bottom: 10,
  },
  listTittle: {
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ViewNotes);

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Creators as TodoActions } from "../store/ducks/todos";

import { Text, FAB, IconButton, TextInput } from "react-native-paper";
import Header from "../component/Header";
//import store from "../store";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function AddNotes(props) {
  const navigation = props.navigation;
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  function onSaveNote() {
    navigation.state.params.addNotes({ noteTitle, noteDescription });
    navigation.goBack();
  }
  return (
    <View style={{ flex: 1 }}>
      <Header titleText="Simple Note" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Note Title Here"
          value={noteTitle}
          mode="outlined"
          multiline={true}
          onChangeText={setNoteTitle}
          syle={styles.title}
        />
        <TextInput
          label="Add Note Description"
          value={noteDescription}
          onChangeText={setNoteDescription}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          icon="check"
          disable={noteTitle == "" ? true : false}
          onPress={() => {
            //onSaveNote();
            props.addTodo(noteTitle, noteDescription);
            console.log(props.todos);
            navigation.goBack();
          }}
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
  iconButton: {
    backgroundColor: "#219653",
    position: "absolute",
    right: 0,
    margin: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  text: {
    height: 300,
    fontSize: 16,
    marginTop: 20,
  },
  fab: { position: "absolute", margin: 20, right: 0, bottom: 0 },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddNotes);

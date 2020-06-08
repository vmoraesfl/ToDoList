import React from "react";

import { FAB, List, TextInput } from "react-native-paper";
import { Text, StyleSheet, View, FlatList } from "react-native";
import TextView from "../component/TextView";
import Button from "../component/Button";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <TextView style={styles.login} h1>
        Login
      </TextView>
      <View style={{ paddingBottom: 20 }}>
        <TextView style={styles.title}>Nome de Usuário</TextView>
        <TextInput
          label="Username"
          mode="outlined"
          multiline={false}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
      </View>
      <View>
        <TextView style={styles.title}>Senha</TextView>

        <TextInput
          secureTextEntry={true}
          label="Password"
          mode="outlined"
          multiline={false}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
      </View>
      <Button style={{ backgroundColor: "blue", borderRadius: 5 }}>
        <TextView
          style={{ fontWeight: "600" }}
          color="white"
          size={20}
          padding={10}
          center
        >
          Enter
        </TextView>
      </Button>
      <View style={{ flexDirection: "row", paddingTop: 30 }}>
        <TextView style={{ fontSize: 20 }}>Novo por aqui? </TextView>
        <TextView style={{ fontSize: 20, alignSelf: "center", color: "blue" }}>
          Registre-se
        </TextView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  login: {
    paddingBottom: 30,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  text: {
    paddingBottom: 20,
  },
  fabLogin: {
    backgroundColor: "blue",
    marginTop: 20,
    borderRadius: 5,
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

export default LoginScreen;

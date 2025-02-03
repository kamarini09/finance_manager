import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Todo from "./todos/Todo";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Typescript!</Text>
      <Todo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

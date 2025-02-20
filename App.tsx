import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import EntryList from "./screens/EntryList";
import EntryEdit from "./screens/EntryEdit";
import EntryDelete from "./screens/EntryDelete";
import React from "react";
import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  EntryList: undefined;
  EntryEdit: undefined;
  EntryDelete: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EntryList">
        <Stack.Screen name="EntryList" component={EntryList} options={{ title: "Entries" }} />
        <Stack.Screen name="EntryEdit" component={EntryEdit} options={{ title: "Edit Entry" }} />
        <Stack.Screen name="EntryDelete" component={EntryDelete} options={{ title: "Delete Entry" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Finance Categories</Text>
//       <Category />
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

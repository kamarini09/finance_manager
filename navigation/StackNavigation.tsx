import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryList from "../screens/EntryList";
import EntryEdit from "../screens/EntryEdit";
import EntryDelete from "../screens/EntryDelete";

export type RootStackParamList = {
  EntryList: undefined;
  EntryEdit: undefined;
  EntryDelete: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="EntryList">
      <Stack.Screen name="EntryList" component={EntryList} />
      <Stack.Screen name="EntryEdit" component={EntryEdit} />
      <Stack.Screen name="EntryDelete" component={EntryDelete} />
    </Stack.Navigator>
  );
}

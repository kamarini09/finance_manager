import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryList from "../entry/EntryList";
import EntryEdit from "../entry/EntryEdit";
import { EntryEntity } from "../entry/EntryEntity";

export type EntriesStackParamList = {
  EntryList: undefined;
  EntryEdit: { entry?: EntryEntity };
};

const Stack = createNativeStackNavigator<EntriesStackParamList>();

const EntriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EntryList" component={EntryList} />
      <Stack.Screen name="EntryEdit" component={EntryEdit} />
    </Stack.Navigator>
  );
};

export default EntriesStack;

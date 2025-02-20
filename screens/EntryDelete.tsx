import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  EntryList: undefined;
  EntryEdit: undefined;
  EntryDelete: undefined;
};

type EntryDeleteNavigationProp = NativeStackNavigationProp<RootStackParamList, "EntryDelete">;

export default function EntryDelete() {
  const navigation = useNavigation<EntryDeleteNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Entry Delete</Text>
    </View>
  );
}

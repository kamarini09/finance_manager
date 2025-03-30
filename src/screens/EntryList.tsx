import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  EntryList: undefined;
  EntryEdit: undefined;
};

type EntryListScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "EntryList">;

export default function EntryList() {
  const navigation = useNavigation<EntryListScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Entry List</Text>
      <Button onPress={() => navigation.navigate("EntryEdit")}>Go to EntryEdit</Button>
    </View>
  );
}

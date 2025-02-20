import { Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  EntryList: undefined;
  EntryEdit: undefined;
  EntryDelete: undefined;
};

type EntryEditNavigationProp = NativeStackNavigationProp<RootStackParamList, "EntryEdit">;

export default function EntryEdit() {
  const navigation = useNavigation<EntryEditNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Entry Edit</Text>
      <Button onPress={() => navigation.navigate("EntryDelete")}>Go to EntryDelete</Button>
    </View>
  );
}

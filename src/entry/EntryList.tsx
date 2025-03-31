import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, Alert, StyleSheet } from "react-native";
import { EntryEntity } from "./EntryEntity";
import { fetchEntries, deleteEntry } from "./entryService";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EntriesStackParamList } from "../navigation/EntriesStack";

const EntryList: React.FC = () => {
  const [entries, setEntries] = useState<EntryEntity[]>([]);

  const navigation = useNavigation<NativeStackNavigationProp<EntriesStackParamList>>();

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const data = await fetchEntries();
      setEntries(data);
    } catch (error) {
      Alert.alert("Error", "Failed to load entries");
    }
  };

  const onDelete = async (id: number) => {
    Alert.alert("Confirm", "Are you sure you want to delete this entry?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteEntry(id);
            setEntries(entries.filter((e) => e.id !== id));
            Alert.alert("Deleted", "Entry removed.");
          } catch (error) {
            Alert.alert("Error", "Could not delete entry.");
          }
        },
      },
    ]);
  };

  const EntryItem = ({ item }: { item: EntryEntity }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text>Amount: {item.amount}</Text>
        <Text>Category: {item.category?.title}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Edit" onPress={() => navigation.navigate("EntryEdit", { entry: item })} />
        <Button title="X" color="black" onPress={() => onDelete(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Add Entry" onPress={() => navigation.navigate("EntryEdit", { entry: undefined })} />
      <FlatList data={entries} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <EntryItem item={item} />} />
    </View>
  );
};

export default EntryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: "#eee",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
});

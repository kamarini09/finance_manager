import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { addEntry, updateEntry } from "./entryService";
import { EntryEntity } from "./EntryEntity";

type EntryEditRouteProp = RouteProp<{ EntryEdit: { entry?: EntryEntity } }, "EntryEdit">;

const EntryEdit: React.FC = () => {
  const route = useRoute<EntryEditRouteProp>();
  const navigation = useNavigation();

  const isEdit = !!route.params?.entry;
  const [title, setTitle] = useState(route.params?.entry?.title || "");
  const [amount, setAmount] = useState(route.params?.entry?.amount?.toString() || "");

  const onSubmit = async () => {
    if (!title || !amount) {
      Alert.alert("Please fill all fields");
      return;
    }

    try {
      if (isEdit) {
        await updateEntry(route.params.entry.id, {
          title,
          amount: Number(amount),
        });
      } else {
        await addEntry({
          title,
          amount: Number(amount),
          categoryId: 1, // for now hardcoded; can replace with category picker
        });
      }

      Alert.alert("Success");
      navigation.goBack();
    } catch (err) {
      Alert.alert("Failed to save entry");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
      <Button title={isEdit ? "Update Entry" : "Add Entry"} onPress={onSubmit} />
    </View>
  );
};

export default EntryEdit;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

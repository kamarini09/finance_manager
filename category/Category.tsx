import { View, Text, TextInput, StyleSheet, Button, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { CategoryEntity } from "./CategoryEntity";
import { addCategory } from "./categoryService";

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [categoryName, setCategoryName] = useState("");

  const onAddCategory = async () => {
    console.log("Sending request with:", { title: categoryName });

    if (!categoryName.trim()) {
      Alert.alert("Error", "Please enter a category name");
      return;
    }

    try {
      const data = await addCategory(categoryName);
      Alert.alert("Success", "Category added successfully!");
      setCategories([...categories, data]);
      setCategoryName("");
    } catch (error) {
      Alert.alert("Error", "Failed to connect to the server");
    }
  };

  const Item = ({ title }: { title: string }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Choose a category</Text>
      <TextInput style={styles.input} onChangeText={setCategoryName} value={categoryName} placeholder="Enter category name" />
      <Button onPress={onAddCategory} title="Add Category" color="#841584" accessibilityLabel="Add category" />

      <FlatList data={categories} renderItem={({ item }) => <Item title={item.title} />} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    marginBottom: 10,
    borderRadius: 5,
  },
});

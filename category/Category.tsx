import { View, Text, TextInput, StyleSheet, Button, FlatList, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { CategoryEntity } from "./CategoryEntity";
import { fetchCategories, addCategory, deleteCategory } from "./categoryService";

//TODO
//YOU SHOULDNT BE ABLE TO ADD TWO TIMES THE SAME CATEGORY NAME
//UNIT TEST FOR ADDING
//ARE YOU SURE YOU WANT TO DELETE
//SHOULD I USE UI COMPONENTS?
//STYLE THE PAGE
//PUT THE URL IN ENV OR GLOBAL DATA
//COMMAND TO FIND THE LOCALHOST ifconfig | grep "inet "
// MAKE XCODE WORK IN MAC

//npx expo start

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      Alert.alert("Error", "Failed to load categories");
    }
  };
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

  const onDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id);
      setCategories(categories.filter((category) => category.id !== id)); // ✅ Remove from UI
      Alert.alert("Deleted", "Category removed successfully!");
    } catch (error) {
      Alert.alert("Error", "Failed to delete category");
    }
  };
  const Item = ({ id, title, onDelete }: { id: number; title: string; onDelete: (id: number) => void }) => (
    <View style={styles.item}>
      <Text>{title}</Text>
      <Button title="X" color="black" onPress={() => onDelete(id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Create a new category</Text>
      <TextInput style={styles.input} onChangeText={setCategoryName} value={categoryName} placeholder="Enter category name" />
      <Button onPress={onAddCategory} title="Add Category" color="#841584" accessibilityLabel="Add category" />

      <FlatList data={categories} renderItem={({ item }) => <Item id={item.id} title={item.title} onDelete={onDeleteCategory} />} keyExtractor={(item) => item.id.toString()} />
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

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
});

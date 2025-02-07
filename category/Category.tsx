import { View, Text, TextInput, StyleSheet, Button, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { CategoryEntity } from "./CategoryEntity";

const API_URL = "http://10.59.130.29:3000/categories";

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
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: categoryName }),
      });
      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Category added successfully!");
        setCategories([...categories, data]);
        setCategoryName("");
      } else {
        const errorData = await response.json();
        Alert.alert("Error", errorData.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
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

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { CategoriesStackParamList } from "../navigation/CategoriesStack";
import { addCategory } from "./categoryService";
import { CategoryEntity } from "./CategoryEntity";

type CategoryEditRouteProp = RouteProp<CategoriesStackParamList, "CategoryEdit">;

const CategoryEdit: React.FC = () => {
  const route = useRoute<CategoryEditRouteProp>();
  const navigation = useNavigation();
  const editing = route.params?.category;

  const [title, setTitle] = useState(editing?.title || "");

  const onSave = async () => {
    if (!title.trim()) {
      Alert.alert("Please enter a category name.");
      return;
    }

    try {
      // Only add for now; update functionality can be added later
      await addCategory(title);
      Alert.alert("Saved!", "Category has been saved.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Failed to save category.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category Name</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder="e.g., Food, Work, Travel" />
      <Button title="Save" onPress={onSave} />
    </View>
  );
};

export default CategoryEdit;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
});

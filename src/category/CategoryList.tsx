import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CategoryEntity } from "./CategoryEntity";
import { fetchCategories, deleteCategory } from "./categoryService";
import { CategoriesStackParamList } from "../navigation/CategoriesStack";
import { Ionicons } from "@expo/vector-icons";

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const navigation = useNavigation<NativeStackNavigationProp<CategoriesStackParamList>>();

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

  const onDelete = async (id: number) => {
    Alert.alert("Confirm", "Are you sure you want to delete this category?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteCategory(id);
            setCategories(categories.filter((c) => c.id !== id));
            Alert.alert("Deleted", "Category removed.");
          } catch (error) {
            Alert.alert("Error", "Could not delete category.");
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: CategoryEntity }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate("CategoryEdit", { category: item })}>
          <Ionicons name="create-outline" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("CategoryEdit", { category: undefined })}>
        <Text style={styles.addButtonText}>+ Add Category</Text>
      </TouchableOpacity>

      <FlatList data={categories} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addButton: {
    backgroundColor: "#841584",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    gap: 10,
  },
});

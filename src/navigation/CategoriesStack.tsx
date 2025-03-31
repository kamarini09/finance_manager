import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "../category/CategoryList";
import CategoryEdit from "../category/CategoryEdit";
import { CategoryEntity } from "../category/CategoryEntity";

export type CategoriesStackParamList = {
  CategoryList: undefined;
  CategoryEdit: { category?: CategoryEntity };
};

const Stack = createNativeStackNavigator<CategoriesStackParamList>();

const CategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="CategoryEdit" component={CategoryEdit} />
    </Stack.Navigator>
  );
};

export default CategoriesStack;

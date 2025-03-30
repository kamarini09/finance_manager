import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigation";
import NewScreen from "../screens/NewScreen";
import Category from "../category/Category";

export type HomeTabParamList = {
  Entries: undefined;
  Categories: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entries" component={StackNavigator} />
      <Tab.Screen name="Categories" component={Category} />
    </Tab.Navigator>
  );
}

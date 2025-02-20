import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigation";
import CategoryScreen from "../screens/categoryScreen";

export type HomeTabParamList = {
  Entries: undefined;
  Categories: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entries" component={StackNavigator} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
    </Tab.Navigator>
  );
}

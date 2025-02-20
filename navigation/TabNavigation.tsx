import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigation";
import NewScreen from "../screens/NewScreen";

export type HomeTabParamList = {
  List: undefined;
  New: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={StackNavigator} />
      <Tab.Screen name="New" component={NewScreen} />
    </Tab.Navigator>
  );
}

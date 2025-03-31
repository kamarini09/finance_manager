import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import EntriesStack from "./EntriesStack";
import ProfileScreen from "../screens/ProfileScreen";
import CategoriesStack from "./CategoriesStack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Entries" component={EntriesStack} />
      <Tab.Screen name="Categories" component={CategoriesStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

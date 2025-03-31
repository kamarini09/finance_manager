import React from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen = () => {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

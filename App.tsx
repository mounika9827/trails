import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "green" }}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

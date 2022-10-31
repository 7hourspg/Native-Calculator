import { View, Text, StatusBar } from "react-native";
import React from "react";
import Index from "./pages/Index";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Index />
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;

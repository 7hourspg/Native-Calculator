import { View, Text, StatusBar } from "react-native";
import * as React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
            }}
          />
          <Stack.Screen name="signup" component={Signup}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

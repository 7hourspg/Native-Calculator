import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import index from "./pages/index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleArticle from "./pages/SingleArticle";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={SingleArticle}
          options={{
            headerTitle: "NewsApp",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Drawer = createDrawerNavigator();
import "react-native-gesture-handler";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import About from "./About";
import { StatusBar, View } from "react-native";

import SingleArticle from "./SingleArticle";

function App() {
  return (
    <>
      <StatusBar />

      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: "NewsApp",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} options={{}} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
      
    </>
  );
}
export default App;

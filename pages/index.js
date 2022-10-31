import * as React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import About from "./About";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle:{backgroundColor:'black'},
          tabBarInactiveTintColor:'grey',
          tabBarActiveTintColor:'red'
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{tabBarBadge:3,tabBarBadgeStyle:{backgroundColor:'grey',color:'white'},
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={20} color={color}  />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

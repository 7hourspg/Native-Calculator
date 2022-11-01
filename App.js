import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import React from "react";
import { Easing, StatusBar, StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import ScreenA from "./pages/ScreenA";
import ScreenB from "./pages/ScreenB";
import ScreenC from "./pages/ScreenC";
import ScreenD from "./pages/ScreenD";
import ScreenE from "./pages/ScreenE";

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const customTransition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["8deg", "0deg"],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1],
                })
              : 1,
          },
        ],
      },
      opacity: current.opacity,
    };
  },
};

const AppStack = () => {
  return (
    <>
      <StatusBar backgroundColor={'red'}/>
      <Stack.Navigator
        // apply for all screen
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
        }}
   
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            gestureDirection: "vertical",
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            gestureDirection: "vertical",
            transitionSpec: {
              open: config,
              close: closeConfig,
            },
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
        <Stack.Screen
          name="ScreenC"
          component={ScreenC}
          options={{
            gestureDirection: "vertical",
            ...customTransition,
          }}
        />
        <Stack.Screen
          name="ScreenD"
          component={ScreenD}
          options={{
            gestureDirection: "vertical",
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
        <Stack.Screen
          name="ScreenE"
          component={ScreenE}
          options={{
            gestureDirection: "vertical-inverted",
            cardStyleInterpolator:
              CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;

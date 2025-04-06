// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Головна" }} />
        <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "Сторінка Один" }} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "Сторінка Два" }} />
        <Stack.Screen name="ScreenThree" component={ScreenThree} options={{ title: "Сторінка Три" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

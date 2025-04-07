// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import ScreenFour from "./screens/ScreenFour";
import ScreenFive from "./screens/ScreenFive";
import ScreenSix from "./screens/ScreenSix";
import ScreenSeven from "./screens/ScreenSeven";
import ScreenEight from "./screens/ScreenEight";
import ScreenNine from "./screens/ScreenNine";
import MenuScreen1 from "./screens/MenuScreen1";
import MenuScreen2 from "./screens/MenuScreen2";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Головна" }} />
          <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "Сторінка Один" }} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "Сторінка Два" }} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} options={{ title: "Сторінка Три" }} />
          <Stack.Screen name="ScreenFour" component={ScreenFour} options={{ title: "Сторінка 4" }} />
          <Stack.Screen name="ScreenFive" component={ScreenFive} options={{ title: "Сторінка 5" }} />
          <Stack.Screen name="ScreenSix" component={ScreenSix} options={{ title: "Сторінка 6" }} />
          <Stack.Screen name="ScreenSeven" component={ScreenSeven} options={{ title: "Сторінка 7" }} />
          <Stack.Screen name="ScreenEight" component={ScreenEight} options={{ title: "Сторінка 8" }} />
          <Stack.Screen name="ScreenNine" component={ScreenNine} options={{ title: "Сторінка 9" }} />
          <Stack.Screen name="Menu1" component={MenuScreen1} options={{ title: "Меню 1" }} />
          <Stack.Screen name="Menu2" component={MenuScreen2} options={{ title: "Меню 2" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

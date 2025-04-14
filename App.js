// App.js
import React from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ScreenHistory from "./screens/ScreenHistory";
import ScreenPrayer from "./screens/ScreenPrayer";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import ScreenFour from "./screens/ScreenFour";
import ScreenFive from "./screens/ScreenFive";
import ScreenSix from "./screens/ScreenSix";
import ScreenSeven from "./screens/ScreenSeven";
import ScreenEight from "./screens/ScreenEight";
import ScreenNine from "./screens/ScreenNine";
import ScreenLitaniya from "./screens/ScreenLitaniya";
import MenuScreen1 from "./screens/MenuScreen1";
import MenuScreen2 from "./screens/MenuScreen2";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <PaperProvider>
      <StatusBar backgroundColor="#70b560" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"  screenOptions={{
    headerStyle: {
      backgroundColor: "#70b560", // фон для всіх хедерів
    },
    headerTintColor: "#fff", // колір кнопки назад і заголовку
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Головна" }} />
          <Stack.Screen name="ScreenHistory" component={ScreenHistory} options={{ title: "Історія" }} />
          <Stack.Screen name="ScreenPrayer" component={ScreenPrayer} options={{ title: "Вступні молитви" }} />
          <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: "ПЕРШИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: "ДРУГИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenThree" component={ScreenThree} options={{ title: "ТРЕТІЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenFour" component={ScreenFour} options={{ title: "ЧЕТВЕРТИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenFive" component={ScreenFive} options={{ title: "П’ЯТИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenSix" component={ScreenSix} options={{ title: "ШОСТИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenSeven" component={ScreenSeven} options={{ title: "СЬОМИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenEight" component={ScreenEight} options={{ title: "ВОСЬМИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenNine" component={ScreenNine} options={{ title: "ДЕВ’ЯТИЙ ДЕНЬ" }} />
          <Stack.Screen name="ScreenLitaniya" component={ScreenLitaniya} options={{ title: "Літанія" }} />
          <Stack.Screen name="Menu1" component={MenuScreen1} options={{ title: "Псалми" }} />
          <Stack.Screen name="Menu2" component={MenuScreen2} options={{ title: "Вервиця щоденна" }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

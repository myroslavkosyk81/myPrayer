// App.js

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [inputDate, setInputDate] = useState("");
  const [storedDate, setStoredDate] = useState(null);
  const [error, setError] = useState("");

  const validateDate = (dateStr) => {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    return regex.test(dateStr);
  };

  const saveDateToStorage = async () => {
    try {
      if (validateDate(inputDate)) {
        await AsyncStorage.setItem("selectedDate", inputDate);
        setStoredDate(inputDate);
        setError("");
        alert("Дата збережена!");
      } else {
        setError("Невірний формат дати! Введіть у форматі дд.мм.рррр");
      }
    } catch (error) {
      console.log("Error saving date: ", error);
    }
  };

  const loadDateFromStorage = async () => {
    try {
      const savedDate = await AsyncStorage.getItem("selectedDate");
      if (savedDate) {
        setStoredDate(savedDate);
        setInputDate(savedDate);
      }
    } catch (error) {
      console.log("Error loading date: ", error);
    }
  };

  useEffect(() => {
    loadDateFromStorage();
  }, []);

  const addOneDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("uk-UA");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputDate}
        placeholder="Введіть дату (дд.мм.рррр)"
        onChangeText={(text) => {
          setInputDate(text);
          setError("");
        }}
        keyboardType="numeric"
      />
      <Button title="Зберегти дату" onPress={saveDateToStorage} />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {storedDate && (
        <>
          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenOne", {
                date: storedDate,
              })
            }
          >
            <Text style={styles.blockText}>Один — {storedDate}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenTwo", {
                date: addOneDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              Два — {addOneDay(storedDate)}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const ScreenOne = ({ route }) => {
  const { date } = route.params;
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Один</Text>
      <Text style={styles.pageDate}>{date}</Text>
      <Text style={styles.pageText}>
        Це сторінка з назвою "Один". Тут ви бачите збережену дату.
      </Text>
    </View>
  );
};

const ScreenTwo = ({ route }) => {
  const { date } = route.params;
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Два</Text>
      <Text style={styles.pageDate}>{date}</Text>
      <Text style={styles.pageText}>
        Це сторінка "Два". Вона містить дату, збільшену на один день. Ви можете
        використовувати це для створення нагадувань або розкладу.
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Головна' }} />
        <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ title: 'Сторінка Один' }} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{ title: 'Сторінка Два' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: "80%",
    textAlign: "center",
  },
  block: {
    marginTop: 20,
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  blockText: {
    fontSize: 18,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pageDate: {
    fontSize: 20,
    marginBottom: 20,
  },
  pageText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});

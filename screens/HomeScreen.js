// screens/HomeScreen.js

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const HomeScreen = ({ navigation }) => {
  const [inputDate, setInputDate] = useState("");
  const [storedDate, setStoredDate] = useState(null);
  const [error, setError] = useState("");

  const validateDate = (dateStr) => {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    return regex.test(dateStr);
  };

  const saveDateToStorage = async () => {
    if (validateDate(inputDate)) {
      await AsyncStorage.setItem("selectedDate", inputDate);
      setStoredDate(inputDate);
      setError("");
      alert("Дата збережена!");
    } else {
      setError("Невірний формат дати! Введіть у форматі dd.mm.yyyy");
    }
  };

  const loadDateFromStorage = async () => {
    const savedDate = await AsyncStorage.getItem("selectedDate");
    if (savedDate) {
      setStoredDate(savedDate);
      setInputDate(savedDate);
    }
  };

  useEffect(() => {
    loadDateFromStorage();
  }, []);

  const secondDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("uk-UA");
  };
  const thirdDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 2);
    return date.toLocaleDateString("uk-UA");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputDate}
        placeholder="Введіть дату (dd.mm.yyyy)"
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
            <Text style={styles.blockText}>
              {blocks.one.title} — {storedDate}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenTwo", {
                date: secondDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.two.title} — {secondDay(storedDate)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenThree", {
                date: thirdDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.three.title} — {thirdDay(storedDate)}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HomeScreen;

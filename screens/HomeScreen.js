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
import { Menu, IconButton } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const [inputDate, setInputDate] = useState("");
  const [storedDate, setStoredDate] = useState(null);
  const [error, setError] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

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
  const forthDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 3);
    return date.toLocaleDateString("uk-UA");
  };
  const fifthDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 4);
    return date.toLocaleDateString("uk-UA");
  };
  const sixthDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString("uk-UA");
  };
  const seventhDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 6);
    return date.toLocaleDateString("uk-UA");
  };
  const eighthDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString("uk-UA");
  };
  const ninethDay = (dateStr) => {
    const parts = dateStr.split(".");
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    date.setDate(date.getDate() + 8);
    return date.toLocaleDateString("uk-UA");
  };

  return (
    <View style={styles.container}>
      {/* Меню кнопка */}
      <View style={{ position: "absolute", top: 5, right: 10 }}>
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <IconButton
              icon="dots-vertical"
              size={24}
              onPress={() => setMenuVisible(true)}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate("Menu1");
            }}
            title="Меню 1"
          />
          <Menu.Item
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate("Menu2");
            }}
            title="Меню 2"
          />
        </Menu>
      </View>
      
      <View style={styles.dateAndButton}>
            
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
      </View>
      

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

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenFour", {
                date: forthDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.four.title} — {forthDay(storedDate)}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenFive", {
                date: fifthDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.five.title} — {fifthDay(storedDate)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenSix", {
                date: sixthDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.six.title} — {sixthDay(storedDate)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenSeven", {
                date: seventhDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.seven.title} — {seventhDay(storedDate)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenEight", {
                date: eighthDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.eight.title} — {eighthDay(storedDate)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() =>
              navigation.navigate("ScreenNine", {
                date: ninethDay(storedDate),
              })
            }
          >
            <Text style={styles.blockText}>
              {blocks.nine.title} — {ninethDay(storedDate)}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default HomeScreen;

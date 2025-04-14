import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/globalStyles";

const NewDateBlocksScreen = () => {
  const [inputDate, setInputDate] = useState("");
  const [storedDate, setStoredDate] = useState(null);
  const [error, setError] = useState("");

  const validateDate = (dateStr) => {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    return regex.test(dateStr);
  };

  const saveDateToStorage = async () => {
    if (validateDate(inputDate)) {
      await AsyncStorage.setItem("selected2Date", inputDate);
      setStoredDate(inputDate);
      setError("");
      alert("Дата збережена!");
    } else {
      setError("Невірний формат дати! Введіть у форматі дд.мм.рррр");
    }
  };

  const loadDateFromStorage = async () => {
    const savedDate = await AsyncStorage.getItem("selected2Date");
    if (savedDate) {
      setStoredDate(savedDate);
      setInputDate(savedDate);
    }
  };

  useEffect(() => {
    loadDateFromStorage();
  }, []);

  const generateBlocks = (startDateStr) => {
    const blocks = [];
    const [day, month, year] = startDateStr.split(".");
    const baseDate = new Date(`${year}-${month}-${day}`);

    for (let i = 0; i < 150; i++) {
      const blockDate = new Date(baseDate);
      blockDate.setDate(blockDate.getDate() + i);
      const formatted = blockDate.toLocaleDateString("uk-UA");
      const blockNumber = i + 1;
      blocks.push({
        id: i.toString(),
        number: blockNumber,
        date: formatted,
        title: `Псалом ${blockNumber} – ${formatted}`,
      });
    }

    return blocks;
  };

  const renderBlock = ({ item }) => (
    <TouchableOpacity style={styles.block}>
      <Text style={styles.blockText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.dateAndButton}>
        <TextInput
          style={styles.inputPsalm}
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
        <FlatList
          data={generateBlocks(storedDate)}
          keyExtractor={(item) => item.id}
          renderItem={renderBlock}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      )}
    </View>
  );
};

export default NewDateBlocksScreen;

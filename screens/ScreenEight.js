// screens/ScreenEight.js

import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenEight = ({ route }) => {
  const { date } = route.params;

  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>{blocks.eight.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      <Text style={styles.pageText}>{blocks.eight.description}</Text>
    </View>
  );
};

export default ScreenEight;


import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/globalStyles";

const MenuScreen2 = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Меню 2</Text>
      <Text style={styles.pageText}>Це другий пункт меню. Тут також може бути корисна інформація або налаштування.</Text>
    </View>
  );
};

export default MenuScreen2;

import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/globalStyles";

const MenuScreen1 = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.pageTitle}>Меню 1</Text>
      <Text style={styles.pageText}>Це перший пункт меню. Тут може бути будь-який вміст.</Text>
    </View>
  );
};

export default MenuScreen1;

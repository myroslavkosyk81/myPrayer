// screens/ScreenFour.js

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenFour = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
      <Text style={styles.pageTitle}>{blocks.four.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.four.description.map((item, index) => (
                <Text
                  key={index}
                  style={[index === 0 ? styles.paragraph2 : styles.paragraph,
                    index === 2 ? styles.paragraph2 : styles.paragraph,
                    (index === 4 || index === 6) ? styles.paragraph2 : styles.paragraph,
                    
                  ]} // застосовуємо стилі в залежності від індексу
                >
                  {item} {/* просто відображаємо текст */}
                </Text>
              ))}
      {/* <Text style={styles.pageText}>{blocks.four.description}</Text> */}
    </View>
    </ScrollView>
    
  );
};

export default ScreenFour;


// screens/ScreenOne.js

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenHistory = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
      <Text style={styles.pageTitle}>{blocks.history.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.history.description.map((item, index) => (
          <Text
            key={index}
            style={[index === 0 ? styles.paragraph2 : styles.paragraph,
              (index === 6 || index === 13) ? styles.paragraph2 : styles.paragraph,
              
            ]} // застосовуємо стилі в залежності від індексу
          >
            {item} {/* просто відображаємо текст */}
          </Text>
        ))}
      {/* {blocks.one.description.map((sentence, index) => (
        
        <Text key={index} style={styles.paragraph}>
          {sentence}
        </Text>
      ))}
      <Text style={styles.pageText}>{blocks.one.description}</Text> */}
    </View>
    </ScrollView>
    
  );
};

export default ScreenHistory;


// screens/ScreenOne.js

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenLitaniya = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
      <Text style={styles.pageTitle}>{blocks.litaniya.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.litaniya.description.map((item, index) => (
          <Text
            key={index}
            style={[index === 0 ? styles.paragraph2 : styles.paragraph,
              (index === 1 || index === 2) ? styles.paragraph2 : styles.paragraph,
              (index === 43 || index === 44) ? styles.paragraph2 : styles.paragraph,
              (index === 46 || index === 51) ? styles.paragraph2 : styles.paragraph,
              index === 54 ? styles.paragraph2 : styles.paragraph,
              
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

export default ScreenLitaniya;


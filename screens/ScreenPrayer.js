// screens/ScreenOne.js

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenPrayer = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
      <Text style={styles.pageTitle}>{blocks.prayer.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.prayer.description.map((item, index) => (
          <Text
            key={index}
            style={[index === 0 ? styles.paragraph2 : styles.paragraph,
              (index === 1 || index === 2) ? styles.paragraph2 : styles.paragraph,
              (index === 3 || index === 4) ? styles.paragraph2 : styles.paragraph,
              (index === 5 || index === 6) ? styles.paragraph2 : styles.paragraph,
              (index === 8 || index === 17) ? styles.paragraph2 : styles.paragraph,
              index === 21 ? styles.paragraph2 : styles.paragraph,
              
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

export default ScreenPrayer;


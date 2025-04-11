// screens/ScreenOne.js

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenOne = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
      <Text style={styles.pageTitle}>{blocks.one.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.one.description.map((item, index) => (
          <Text
            key={index}
            style={[index === 0 ? styles.paragraph2 : styles.paragraph,
              (index === 3 || index === 1) ? styles.paragraph2 : styles.paragraph,
              (index === 5 || index === 7) ? styles.paragraph2 : styles.paragraph,
              
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

export default ScreenOne;


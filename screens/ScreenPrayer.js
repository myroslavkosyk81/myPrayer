// screens/ScreenOne.js

import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenPrayer = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
        <Image
          source={require("../assets/Tadey_2.jpg")}
          style={styles.image}
          resizeMode="contain" 
        />
      <Text style={styles.pageTitle}>{blocks.prayer.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.prayer.description.map((item, index) => (
          <Text
            key={index}
            style={[index === 0 ? styles.paragraph2 : styles.paragraph,
              (index === 1 || index === 2) ? styles.paragraph2 : styles.paragraph,
              (index === 3 || index === 4) ? styles.paragraph2 : styles.paragraph,
              index === 5 ? styles.paragraph2 : styles.paragraph,
              (index === 7 || index === 16) ? styles.paragraph2 : styles.paragraph,
              index === 20 ? styles.paragraph2 : styles.paragraph,
              
            ]} 
          >
            {item} 
          </Text>
        ))}
      
    </View>
    </ScrollView>
    
  );
};

export default ScreenPrayer;


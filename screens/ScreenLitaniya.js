// screens/ScreenOne.js

import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenLitaniya = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
        <Image
          source={require("../assets/Tadey_2.jpg")}
          style={styles.image}
          resizeMode="contain" 
        />
      <Text style={styles.pageTitle}>{blocks.litaniya.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.litaniya.description.map((item, index) => (
          <Text
            key={index}
            style={[index === 1 ? styles.paragraph2 : styles.paragraph,
              (index === 43 || index === 44) ? styles.paragraph2 : styles.paragraph,
              (index === 46 || index === 51) ? styles.paragraph2 : styles.paragraph,
              index === 54 ? styles.paragraph2 : styles.paragraph,
              
            ]} 
          >
            {item} 
          </Text>
        ))}
      
    </View>
    </ScrollView>
    
  );
};

export default ScreenLitaniya;


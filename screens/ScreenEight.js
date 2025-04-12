// screens/ScreenEight.js

import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/blockTexts";

const ScreenEight = ({ route }) => {
  const { date } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
        <Image
                  source={require("../assets/Tadey_2.jpg")}
                  style={styles.image}
                  resizeMode="contain" 
                />
        
      <Text style={styles.pageTitle}>{blocks.eight.title}</Text>
      <Text style={styles.pageDate}>{date}</Text>
      {blocks.eight.description.map((item, index) => (
                <Text
                  key={index}
                  style={[index === 0 ? styles.paragraph2 : styles.paragraph,
                    index === 2 ? styles.paragraph2 : styles.paragraph,
                    (index === 4 || index === 7) ? styles.paragraph2 : styles.paragraph,
                    
                  ]} 
                >
                  {item}
                </Text>
              ))}
      
    </View>
    </ScrollView>
    
  );
};

export default ScreenEight;


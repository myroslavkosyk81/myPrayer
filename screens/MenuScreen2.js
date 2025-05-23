// screens/ScreenOne.js

import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../styles/globalStyles";
import { blocks } from "../data/vervytsa";
import { testStyle } from "../data/testStyle";

const ScreenOne = () => {
 

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.page}>
        
        {/* 🖼️ Картинка */}
        <Image
          source={require("../assets/vervutsa.png")}
          style={styles.imageVervytsa}
          resizeMode="contain" 
        />

        <Text style={styles.pageTitle}>{blocks.one.title}</Text>
        
        {blocks.one.description.map((item, index) => (
          <Text
            key={index}
            style={[
              index === 0 ? styles.paragraph2 : styles.paragraph,
              index === 2 ? styles.paragraph2 : styles.paragraph,
              index === 3 ? styles.paragraph2 : styles.paragraph,
              index === 5 || index === 9 ? styles.paragraph2 : styles.paragraph,
              index === 19 ? styles.paragraph2 : styles.paragraph,
              index === 20 ? styles.paragraph2 : styles.paragraph,
              index === 26 ? styles.paragraph2 : styles.paragraph,
              index === 28 ? styles.paragraph2 : styles.paragraph,
              index === 30 ? styles.paragraph2 : styles.paragraph,
              index === 43 ? styles.paragraph2 : styles.paragraph,
              index === 45 ? styles.paragraph2 : styles.paragraph,
              index === 47 ? styles.paragraph2 : styles.paragraph,
              index === 48 ? styles.paragraph2 : styles.paragraph,
              index === 51 ? styles.paragraph2 : styles.paragraph,
              index === 54 ? styles.paragraph2 : styles.paragraph,
              index === 57 ? styles.paragraph2 : styles.paragraph,
              index === 60 ? styles.paragraph2 : styles.paragraph,
              index === 64 ? styles.paragraph2 : styles.paragraph,
              index === 65 ? styles.paragraph2 : styles.paragraph,
              index === 68 ? styles.paragraph2 : styles.paragraph,
              index === 71 ? styles.paragraph2 : styles.paragraph,
              index === 74 ? styles.paragraph2 : styles.paragraph,
              index === 77 ? styles.paragraph2 : styles.paragraph,
              index === 81 ? styles.paragraph2 : styles.paragraph,
              index === 82 ? styles.paragraph2 : styles.paragraph,
              index === 85 ? styles.paragraph2 : styles.paragraph,
              index === 88 ? styles.paragraph2 : styles.paragraph,
              index === 91 ? styles.paragraph2 : styles.paragraph,
              index === 94 ? styles.paragraph2 : styles.paragraph,
              index === 98 ? styles.paragraph2 : styles.paragraph,
              index === 99 ? styles.paragraph2 : styles.paragraph,
              index === 102 ? styles.paragraph2 : styles.paragraph,
              index === 105 ? styles.paragraph2 : styles.paragraph,
              index === 108 ? styles.paragraph2 : styles.paragraph,
              index === 111 ? styles.paragraph2 : styles.paragraph,
            ]}
          >
            {item}
          </Text>
        ))}
        
        {/* <Text style={styles.pageTitle2}>{testStyle.two.title}</Text>
        <Text style={styles.pageTitle2}>{testStyle.two.description[0]}</Text>
        
        {testStyle.two.description.map((item, index) => (
          <Text
            key={index}
            style={[
              index === 0 ? styles.paragraph3 : styles.paragraph,
              index === 2 ? styles.paragraph2 : styles.paragraph,
            
            ]}
          >
            {item}
          </Text>
        ))} */}
      </View>
    </ScrollView>
  );
};

export default ScreenOne;

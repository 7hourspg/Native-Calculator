import { View, Text, Image } from "react-native";
import React from "react";
import logo from "../assets/png.png";
const About = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1, alignItems: "center" }}>
      <Image style={{ width: 400, height: 400,marginTop:20 }} source={logo} />
      <Text
        style={{
          color: "white",
          fontSize: 20,
          marginVertical: 50,
          fontWeight: "bold",
        }}
      >
        We are a NewsCompany
      </Text>
      <Text
        onPress={() => navigation.goBack()}
        style={{
          color: "white",
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "red",
          fontSize: 15,
          fontWeight: "500",
        }}
      >
        Know More
      </Text>
    </View>
  );
};

export default About;

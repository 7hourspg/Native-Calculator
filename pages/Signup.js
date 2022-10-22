import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import logo from "../assets/whale-7446905_960_720.jpg";
const Signup = ({navigation}) => {
  const [first, setfirst] = useState("");
  console.log(first);
  return (
    <>
      <View>
        <View>
          <Image source={logo} style={styles.Image} />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={setfirst}
          />
          <TextInput placeholder="Password" style={styles.input} />
          <Text onPress={() => console.log("Hello")} style={styles.btn}>
            Submit
          </Text>
        </View>
        <View>
          <Text style={styles.not_account}>
             Already have account ? <Text style={styles.span} onPress={() => navigation.navigate('Login')}>Login</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 250,
    height: 250,
    borderRadius: 1000,
    marginTop: 20,
   alignSelf:'center'
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
  text_container: {
    alignSelf: "center",
    justifyContent: "space-around",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  not_account: {
    alignSelf: "center",
    marginTop: 20,
  },
  span: {
    color: "red",
  },
});

export default Signup;

import {
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const App = () => {
  const { width } = Dimensions.get("window");
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);
  // const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    const func = async () => {
      await getItemList();
    };
    func();
  }, [setArray]);
  const addTitle = async () => {
    setArray([...array, { title: input }]);
    addItemToList();
    setInput("");
  };
  const addItemToList = async () => {
    try {
      const value = JSON.stringify(array);
      await AsyncStorage.setItem("itemList", value);

      console.log("Data Is Added");
    } catch (err) {
      console.log(err);
    }
  };
  const getItemList = async () => {
    try {
      const data = await AsyncStorage.getItem("itemList");
      const newValue = JSON.parse(data);
      setArray(newValue);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(array);
  console.log(input);
  return (
    <>
      <StatusBar />
      <View>
        <Text
          style={{
            fontSize: 18,
            alignSelf: "center",
            marginVertical: 20,
            fontWeight: "500",
          }}
        >
          Hello Native
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "red",
            width: width - 40,
            alignSelf: "center",
          }}
        >
          <TextInput
            placeholder="Enter Tasks"
            onChangeText={(input) => setInput(input)}
            value={input}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Button onPress={() => addTitle()} title="Add" />
        </View>
        {array.map((item, i) => {
          return <Text key={i}>{item.title}</Text>;
        })}
      </View>
    </>
  );
};

export default App;

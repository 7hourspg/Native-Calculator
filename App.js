import {
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
const { width, height } = Dimensions.get("screen");
const color = "white";
const App = () => {
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([]);
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [operator, setOperator] = useState();
  const [isTrue, setIsTrue] = useState(false);
  const [data, setData] = useState(null);

  // Handle String

  const handleData = (num) => {
    return isTrue ? setArr2([...arr2, num]) : setArr([...arr, num]);
  };

  useEffect(() => {
    setValue1(
      Math.floor(arr.reduce((partialSum, a) => partialSum + a, arr ? "" : "0"))
    );
    setValue2(
      Math.floor(
        arr2.reduce((partialSum, a) => partialSum + a, arr2 ? "" : "0")
      )
    );
  }, [arr2, data, arr]);

  //Handle operator

  useEffect(() => {
    if (operator === 1 && 2 && 3) {
      setIsTrue(true);
    }
  }, [operator]);
  // Handle Enter
  const handleEnter = () => {
    if (operator === 1) {
      function add() {
        if (data === null) {
          return setData(value1 + value2), setArr([]), setArr2([]);
        } else {
          return setData(data + value2), setArr2([]);
        }
      }
      add();
    }
    if (operator === 2) {
      function Minus() {
        if (data === null) {
          return setData(value1 - value2), setArr([]), setArr2([]);
        } else {
          return setData(data - value2), setArr2([]);
        }
      }
      Minus();
    }

    if (operator === 3) {
      function Multiply() {
        if (data === null) {
          return setData(value1 * value2), setArr([]), setArr2([]);
        } else {
          return setData(data * value2), setArr2([]);
        }
      }
      Multiply();
    }
  };

  console.log(value1, "value1");
  console.log(value2, "value2");
  console.log(data, "data");
  return (
    <>
      <StatusBar />
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <View style={{ flex: 1, backgroundColor: "black", width, height }}>
          <View
            style={{
              height: height / 3,
              alignItems: "flex-end",
              flexDirection: "row",
              justifyContent: "flex-end",
              width: width - 20,
            }}
          >
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                width: width - 40,
                height: height / 3,
              }}
            >
              <Text
                style={{
                  color,
                  fontSize: 30,
                  marginRight: 10,
                  marginBottom: 50,
                  textAlign: "center",
                }}
              >
                TOTAL : {data}
              </Text>
              <Text
                style={{
                  color,
                  fontSize: 60,
                  marginRight: 10,
                  marginBottom: 50,
                  textAlign: "left",
                }}
              >
                {value1}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: width - 20,
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "stretch",
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity onPress={() => handleData(1)}>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#474E68",
                    borderRadius: 100,
                    fontSize: 35,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 15,
                    opacity: 0.8,
                  }}
                >
                  1
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleData(2)}>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#474E68",
                    borderRadius: 100,
                    fontSize: 35,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 15,
                    opacity: 0.8,
                  }}
                >
                  2
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleData(3)}>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#474E68",
                    borderRadius: 100,
                    fontSize: 35,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 15,
                    opacity: 0.8,
                  }}
                >
                  3
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOperator(1)}>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#FF7F3F",
                    borderRadius: 100,
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 12,
                    opacity: 0.8,
                  }}
                >
                  +
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#474E68",
                    borderRadius: 100,
                    fontSize: 35,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 15,
                    marginVertical: 20,
                    opacity: 0.8,
                  }}
                >
                  4
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#474E68",
                    borderRadius: 100,
                    fontSize: 35,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 15,
                    marginVertical: 20,
                    opacity: 0.8,
                  }}
                >
                  5
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#474E68",
                    borderRadius: 100,
                    fontSize: 35,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 15,
                    marginVertical: 20,
                    opacity: 0.8,
                  }}
                >
                  6
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOperator(2)}>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#FF7F3F",
                    borderRadius: 100,
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 30,
                    paddingVertical: 12,
                    marginVertical: 20,
                    opacity: 0.8,
                  }}
                >
                  -
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color,
                  backgroundColor: "#474E68",
                  borderRadius: 100,
                  fontSize: 35,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingHorizontal: 28,
                  paddingVertical: 15,
                  marginVertical: 20,
                  opacity: 0.8,
                }}
              >
                7
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color,
                  backgroundColor: "#474E68",
                  borderRadius: 100,
                  fontSize: 35,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingHorizontal: 28,
                  paddingVertical: 15,
                  marginVertical: 20,
                  opacity: 0.8,
                }}
              >
                8
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color,
                  backgroundColor: "#474E68",
                  borderRadius: 100,
                  fontSize: 35,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingHorizontal: 28,
                  paddingVertical: 15,
                  marginVertical: 20,
                  opacity: 0.8,
                }}
              >
                9
              </Text>
            </View>
            <TouchableOpacity onPress={() => setOperator(3)}>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#FF7F3F",
                    borderRadius: 100,
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 12,
                    marginVertical: 20,
                    opacity: 0.8,
                  }}
                >
                  *
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color,
                  backgroundColor: "#474E68",
                  borderRadius: 100,
                  fontSize: 35,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingHorizontal: 75,
                  paddingVertical: 15,
                  marginVertical: 20,
                  opacity: 0.8,
                }}
              >
                0
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color,
                  backgroundColor: "#474E68",
                  borderRadius: 100,
                  fontSize: 35,
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingHorizontal: 35,
                  paddingVertical: 15,
                  marginVertical: 20,
                  opacity: 0.8,
                }}
              >
                .
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleEnter()}>
              <View>
                <Text
                  style={{
                    color,
                    backgroundColor: "#FF7F3F",
                    borderRadius: 100,
                    fontSize: 40,
                    fontWeight: "bold",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    paddingVertical: 12,
                    marginVertical: 20,
                    opacity: 0.8,
                  }}
                >
                  =
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default App;

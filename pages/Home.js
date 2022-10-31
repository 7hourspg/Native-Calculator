import { View, Text, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../assets/sun.png";
import Icon from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = () => {
  const [input, setinput] = useState("" || "Patna");
  const [data, setData] = useState();
  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=fc42849134f821fc21e4950fc9931cdc`
      )
      .then((res) => {
        setData([res.data]);
      });
   
  }, []);

  // timeConverter();
  const timeConverterRise = ({ data }) => {
    const time = new Date(data);

    console.log(time);
    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  };
  const timeConverterSet = ({ data }) => {
    const time = new Date(data);

    return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Image
        style={{ width: width, height: 300, marginTop: 20 }}
        source={img}
      />
      <View>
        {data?.map((item, i) => {
          return (
            <View key={i}>
              <View style={{ alignItems: "center", marginBottom: 40 }}>
                <Icon name="sun" size={50} color={"#E6CBA8"} />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: 20,
                    marginTop: 10,
                  }}
                >
                  Patna {item.main.temp}
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Icon name="sunrise" size={50} color={"yellow"} />
                  <Text style={{ color: "white" }}>
                    {timeConverterRise({ data: item.sys.sunrise })}
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Icon name="sunset" size={50} color={"yellow"} />
                  <Text style={{ color: "white" }}>
                    {timeConverterSet({ data: item.sys.sunset })}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Home;

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = ({ navigation}) => {
 
  const [data, setData] = useState([]);
  const Url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=8a48c369a3e943c8b4cda4612dc85c5b";

  useEffect(() => {
    axios.get(Url).then((res) => setData(res.data.articles));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inner_ctr}>
          {data.map((item) => {
            return (
              <View style={styles.dta_ctr} key={item.title}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `${item.urlToImage}`,
                  }}
                />
                <Text style={styles.title_txt}>{item.title}</Text>
                <Button
                  title="Read More"
                  color="#841584"
                  onPress={() => navigation.navigate("Article",{item})}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "black",
    flex:1
  },
  inner_ctr: {
    // marginVertical: 20,
    width: 400,

    alignItems: "center",
    backgroundColor: "black",
  },
  dta_ctr: {
    flexDirection: "column",
    minWidth: 400,
    marginTop: 20,
    backgroundColor: "black",
  },
  image: {
    minWidth: 370,
    minHeight: 270,
    alignSelf: "center",
    resizeMode: "center",
  },
  title_txt: {
    fontSize: 20,
    alignSelf: "flex-start",
    // marginVertical: 10,
    paddingBottom: 30,
    color: "white",
    marginHorizontal: 10,
  },
});
export default Home;

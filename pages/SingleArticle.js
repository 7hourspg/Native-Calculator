import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const SingleArticle = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={styles.main_ctr}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.color}>Source :{item.source.name}</Text>
          <Text style={styles.color}>Time :{item.publishedAt}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: `${item.urlToImage}`,
          }}
        />
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main_ctr: {
    marginHorizontal: 5,
    marginTop: 10,
    // backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  image: {
    minWidth: 370,
    minHeight: 270,
    alignSelf: "center",
    resizeMode: "center",
  },
  content: {
    color: "white",
    fontSize: 18,
    marginVertical: 20,
  },
  color: {
    marginTop: 20,
    color: "grey",
    fontSize: 15,
  },
});

export default SingleArticle;

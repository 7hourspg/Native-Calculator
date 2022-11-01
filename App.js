import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";
import React from "react";
import react from "react";

const App = () => {
  const { width, height } = Dimensions.get("screen");
  const Item_Width = width * 0.76;
  const Item_Height = width * 1.47;
  const Images = [
    "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80",
  ];
  const data = Images.map((image, index) => ({
    key: String(index),
    photo: image,
  }));
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View
              style={{ width, justifyContent: "center", alignItems: "center" }}
            >
              <View
                style={{
                  borderRadius: 18,
                  shadowColor: "red",
                  shadowRadius: 30,
                  shadowOpacity: 1,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  padding: 12,
                  backgroundColor: "white",
                  elevation: 20,
                }}
              >
                <View
                  style={{
                    width: Item_Width,
                    height: Item_Height - 50,
                    overflow: "hidden",
                    alignItems: "center",
                    borderRadius: 14,
                  }}
                >
                  <Animated.Image
                    source={{ uri: item.photo }}
                    style={{
                      width: Item_Width * 1.4,
                      height: Item_Height,
                      resizeMode: "cover",
                      transform: [
                        {
                          translateX,
                        },
                      ],
                    }}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
});
export default App;

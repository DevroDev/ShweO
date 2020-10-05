import { Video } from "expo-av";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  FlatList,
} from "react-native";

import { Ionicons, Feather } from "@expo/vector-icons";

import { colors } from "../assets/style";

const ReactVideo = ({ navigation }) => {
  const [items, setItem] = useState([
    { id: "1", name: "" },
    { id: "2", name: "" },
  ]);

  const [name, setName] = useState("");
  const add = () => {
    setItem([...items, { id: items.length + 1, name }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1, paddingTop: 12, paddingLeft: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Lessons")}>
            <Ionicons name="md-arrow-back" size={24} color="#d8d9d8"></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              paddingRight: 10,
              paddingTop: 12,
              fontSize: 18,
              fontWeight: "900",
            }}
          >
            Video Player
          </Text>
        </View>
      </View>
      <View>
        <Video
          source={require("../Video/video.mp4")}
          shouldPlay
          resizeMode={"contain"}
          useNativeControls
          muted
          isLooping={true}
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width * (9 / 16),
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", paddingVertical: 20 }}>
          <Ionicons
            name="ios-add-circle"
            size={30}
            color={colors.defaultRed}
            style={{ paddingLeft: 10 }}
          />
          <Feather
            name="share-2"
            size={30}
            color={colors.defaultRed}
            style={{ paddingLeft: 15 }}
          />
          <Feather
            name="arrow-down-circle"
            size={30}
            color={colors.defaultRed}
            style={{ paddingLeft: 15 }}
          />
        </View>
        <Feather
          name="bookmark"
          size={30}
          color={colors.defaultRed}
          style={{ paddingRight: 10, alignSelf: "center" }}
        />
      </View>
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={{ fontSize: 20 }}>Introduction to React Native</Text>
        <Text style={{ color: colors.textGray, fontSize: 14, paddingTop: 5 }}>
          The best and most beautiful things in this world cannot be seen or
          even heard, but must be felt with the heart
        </Text>
      </View>
      <View
        style={{
          borderBottomColor: colors.textGray,
          borderBottomWidth: 0.5,
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      ></View>

      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={{ color: colors.textGray, fontSize: 18 }}>
          View all suggestions
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Text
              style={{ fontSize: 18, paddingTop: 10, color: colors.textGray }}
            >
              {item.name}
            </Text>
          )}
          keyExtractor={(i) => i.id}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={{ flex: 1 }}
          placeholder="Add Suggestion"
          onChangeText={(text) => setName(text)}
          value={name}
        ></TextInput>
        <TouchableOpacity onPress={add}>
          <Feather
            name="arrow-right"
            color={colors.textGray}
            size={30}
            style={{ paddingTop: 20, paddingRight: 15 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: colors.defaultRed,
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputContainer: {
    position: "absolute",
    bottom: 5,
    paddingLeft: 32,
    flexDirection: "row",
  },
});

export default ReactVideo;

import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { colors } from "../assets/style";

const categoryIT = ({ navigation }) => {
  const [category] = useState([
    {
      icon: "ios-desktop",
      title: "Information Technology",
      key: "1",
      color: "green",
    },
    {
      icon: "ios-briefcase",
      title: "Business Management",
      key: "2",
      color: "orange",
    },
    { icon: "ios-desktop", title: "Computer Science", key: "3", color: "blue" },
    { icon: "ios-keypad", title: "Language", key: "4", color: "aqua" },
    { icon: "ios-fitness", title: "Fitness", key: "5", color: "violet" },
    { icon: "ios-desktop", title: "Graphic Design", key: "6", color: "brown" },
    { icon: "ios-musical-notes", title: "Music", key: "7", color: "red" },
    { icon: "ios-film", title: "Video Editing", key: "8", color: "pink" },
    { icon: "ios-podium", title: "Marketing", key: "9", color: "cyan" },
    { icon: "ios-briefcase", title: "Start Up", key: "10", color: "#568203" },
    { icon: "ios-school", title: "Engineering", key: "11", color: "#89CFF0" },
    { icon: "ios-snow", title: "Electronics", key: "12", color: "#9F2B68" },
    {
      icon: "ios-school",
      title: "Robotics Engineering",
      key: "13",
      color: "#007FFF",
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingVertical: 20, backgroundColor: colors.defaultRed }}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search By Category"
          placeholderTextColor="#666"
        ></TextInput>
        <Feather
          name="search"
          size={22}
          color="#666"
          style={{ position: "absolute", top: 50, right: 60, opacity: 0.6 }}
        />
      </View>
      <FlatList
        data={category}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("CategoryIT")}>
              <View style={styles.cateContainer}>
                <View styles={{ width: "20%" }}>
                  <Ionicons
                    name={item.icon}
                    size={30}
                    color={item.color}
                    style={{ marginLeft: 35 }}
                  />
                </View>
                <View
                  style={{ alignSelf: "center", paddingLeft: 40, width: "80%" }}
                >
                  <Text style={{ fontSize: 16, color: "grey" }}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  setTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.defaultRed,
  },
  setTitleText: {
    fontSize: 16,
    fontWeight: "normal",
    color: colors.defaultRed,
  },

  searchBox: {
    margin: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  cateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
});

export default categoryIT;

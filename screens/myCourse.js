import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../assets/style";

const Course = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1, paddingTop: 12, paddingLeft: 15 }}>
          <Ionicons name="ios-infinite" color={"white"} size={30} style={{}} />
        </View>
        <View
          style={{ flex: 1.5, alignContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              paddingTop: 12,
              fontSize: 22,
              fontWeight: "900",
            }}
          >
            My Course
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Ionicons
            name="ios-search"
            color={"white"}
            size={30}
            style={{ position: "absolute", right: 12, paddingTop: 12 }}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            margin: 10,
            paddingVertical: 30,
            paddingHorizontal: 20,
            borderColor: colors.textGray,
            borderWidth: 0.5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Learning is not attained by chance,{" "}
          </Text>
          <Text
            style={{
              fontSize: 15,
              alignSelf: "center",
              textAlign: "center",
              color: colors.textGray,
            }}
          >
            it must be sought for with ardor and attended to with diligence
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Lessons")}>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
              <Image
                source={{
                  uri:
                    "https://mattermost.com/wp-content/uploads/2018/10/React_Native_Logo.png",
                }}
                style={{ width: 180, height: 180 }}
              ></Image>
              <Text
                style={{
                  paddingTop: 5,
                  position: "absolute",
                  alignSelf: "center",
                  textAlign: "center",
                  fontSize: 16,
                  color: "white",
                }}
              >
                Mobile app development with React Native
              </Text>
              <Text
                style={{
                  position: "absolute",
                  color: "white",
                  alignSelf: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  borderColor: "white",
                  borderWidth: 1,
                  marginTop: 90,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Continue
              </Text>
              <Text
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  fontSize: 16,
                  color: "white",
                  marginTop: 135,
                }}
              >
                16 Videos
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ margin: 10 }}>
            <Image
              source={{
                uri:
                  "https://c4.wallpaperflare.com/wallpaper/801/330/425/laravel-php-code-simple-wallpaper-thumb.jpg",
              }}
              style={{ width: 180, height: 180 }}
            ></Image>
            <Text
              style={{
                paddingTop: 5,
                position: "absolute",
                alignSelf: "center",
                textAlign: "center",
                fontSize: 16,
                color: "white",
              }}
            >
              Laravel for Absolute beginner
            </Text>
            <Text
              style={{
                position: "absolute",
                color: "white",
                alignSelf: "center",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderColor: "white",
                borderWidth: 1,
                marginTop: 90,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Continue
            </Text>
            <Text
              style={{
                position: "absolute",
                alignSelf: "center",
                fontSize: 16,
                color: "white",
                marginTop: 135,
              }}
            >
              14 Videos
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Image
              source={{
                uri: "https://www.filepicker.io/api/file/sXz6u6kMQzK9uXkCwtPv",
              }}
              style={{ width: 180, height: 180 }}
            ></Image>
            <Text
              style={{
                paddingTop: 5,
                position: "absolute",
                alignSelf: "center",
                textAlign: "center",
                fontSize: 16,
                color: "white",
              }}
            >
              Flutter for mobile development Bootcamp
            </Text>
            <Text
              style={{
                position: "absolute",
                color: "white",
                alignSelf: "center",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderColor: "white",
                borderWidth: 1,
                marginTop: 90,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Continue
            </Text>
            <Text
              style={{
                position: "absolute",
                alignSelf: "center",
                fontSize: 16,
                color: "white",
                marginTop: 135,
              }}
            >
              20 Videos
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Image
              source={{
                uri:
                  "https://www.weblineindia.com/wp-content/uploads/2017/03/full-stack-development-by-weblineindia.jpg",
              }}
              style={{ width: 180, height: 180 }}
            ></Image>
            <Text
              style={{
                paddingTop: 5,
                position: "absolute",
                alignSelf: "center",
                textAlign: "center",
                fontSize: 16,
                color: "white",
              }}
            >
              Full Stack web development zero to hero
            </Text>
            <Text
              style={{
                position: "absolute",
                color: "white",
                alignSelf: "center",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderColor: "white",
                borderWidth: 1,
                marginTop: 90,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Continue
            </Text>
            <Text
              style={{
                position: "absolute",
                alignSelf: "center",
                fontSize: 16,
                color: "white",
                marginTop: 135,
              }}
            >
              32 Videos
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Image
              source={{
                uri:
                  "https://qit.co.ke/wp/wp-content/uploads/2018/10/python-logo-3.6.gif",
              }}
              style={{ width: 180, height: 180 }}
            ></Image>
            <Text
              style={{
                paddingTop: 5,
                position: "absolute",
                alignSelf: "center",
                textAlign: "center",
                fontSize: 16,
                color: "white",
              }}
            >
              Learn python in 2 weeks
            </Text>
            <Text
              style={{
                position: "absolute",
                color: "white",
                alignSelf: "center",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderColor: "white",
                borderWidth: 1,
                marginTop: 90,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Continue
            </Text>
            <Text
              style={{
                position: "absolute",
                alignSelf: "center",
                fontSize: 16,
                color: "white",
                marginTop: 135,
              }}
            >
              14 Videos
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Image
              source={{
                uri:
                  "https://i.graphicmama.com/blog/wp-content/uploads/2019/04/11142949/online-graphic-design-courses-the-most-comprehensive-guide-11.jpg",
              }}
              style={{ width: 180, height: 180 }}
            ></Image>
            <Text
              style={{
                paddingTop: 5,
                position: "absolute",
                alignSelf: "center",
                textAlign: "center",
                fontSize: 16,
                color: "white",
              }}
            >
              online graphic design course
            </Text>
            <Text
              style={{
                position: "absolute",
                color: "white",
                alignSelf: "center",
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderColor: "white",
                borderWidth: 1,
                marginTop: 90,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Continue
            </Text>
            <Text
              style={{
                position: "absolute",
                alignSelf: "center",
                fontSize: 16,
                color: "white",
                marginTop: 135,
              }}
            >
              8 Videos
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  header: {
    backgroundColor: colors.defaultRed,
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Course;

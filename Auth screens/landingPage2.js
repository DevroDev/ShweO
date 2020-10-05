import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class LandingPage1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
                paddingLeft: "85%",
                paddingTop: 15,
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
          <Image
            source={require("../assets/landingpage/landing2.png")}
            style={{ width: "100%", height: 380 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 28, paddingBottom: 20, fontWeight: "900" }}>
            Intro Page 2
          </Text>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "justify",
              paddingHorizontal: 20,
              fontSize: 15,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LandingPage3")}
          >
            <Text style={styles.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textContainer: {
    marginTop: 20,
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 100,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    borderRadius: 30,
  },
});

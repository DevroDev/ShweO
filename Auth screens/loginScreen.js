import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StatusBar,
  LayoutAnimation,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    LayoutAnimation.easeInEaseOut();

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <ImageBackground
          source={require("../assets/img/background.jpg")}
          style={{ width: "100%", height: "100%" }}
          imageStyle={{ opacity: 0.8 }}
        ></ImageBackground>

        <View
          style={{ position: "absolute", alignSelf: "center", marginTop: 60 }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            Welcome Back, Sign in
          </Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={{ color: "#fff", fontWeight: "500" }}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              New to ShweO?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                Sign Up
              </Text>
            </Text>
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
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    color: "red",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#e9446a",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    paddingHorizontal: 30,
    position: "absolute",
    width: "100%",
    alignContent: "center",
    marginTop: "50%",
  },
  inputTitle: {
    color: "white",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "white",
  },
  button: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: "#e9446a",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});

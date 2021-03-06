import React, { setState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { colors } from "../assets/style";

export default class PaymentScreen extends React.Component {
  state = {
    text: "",
    image: null,
  };

  componentDidMount() {
    this.getPhotoPermission();
  }

  getPhotoPermission = async () => {
    if (Constants.platform.android) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status != "granted") {
        alert("We need permission to access your camera roll");
      }
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons
              name="md-arrow-back"
              size={24}
              color="#d8d9d8"
              style={{ paddingTop: 15, paddingLeft: 10 }}
            ></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Loading")}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "white",
                paddingTop: 15,
                paddingRight: 10,
              }}
            >
              Proceed
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={4}
            style={{ flex: 1 }}
            placeholder="Enter Your Name"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
          <Ionicons name="md-camera" size={32} color="#d8d9db"></Ionicons>
        </TouchableOpacity>

        <View style={{ marginHorizontal: 32, marginTop: 32, height: 380 }}>
          <Image
            source={{ uri: this.state.image }}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: colors.defaultRed,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    marginTop: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  inputContainer: {
    margin: 32,
    flexDirection: "row",
  },
  avater: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32,
  },
});

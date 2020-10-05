import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Platform,
  Button,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

import { colors } from "../assets/style";

const ConsultantProfile = ({ navigation }) => {
  const profileImage = {
    uri:
      "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/25/1498080333-tj-miller.jpg",
  };
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ paddingTop: 12, paddingLeft: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ConsultantList")}
          >
            <Ionicons name="md-arrow-back" size={24} color={"white"}></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={{ paddingRight: 15 }}>
          <Ionicons
            name="md-more"
            size={24}
            color={"white"}
            style={{ alignSelf: "center", paddingTop: 12 }}
          ></Ionicons>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignSelf: "center", paddingTop: 20 }}>
          <View style={styles.profileImage}>
            <Image
              source={profileImage}
              style={styles.image}
              resizeMode="cover"
            ></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Erlic Bachmann
          </Text>
          <Text style={styles.text}>Co-Founder of Pied Pipper</Text>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.statsBox}>
            <TouchableOpacity onPress={() => navigation.navigate("Pay")}>
              <Ionicons name="ios-call" size={25} color={colors.defaultRed} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#dfd8c8",
                borderLeftWidth: 2,
                borderRightWidth: 2,
              },
            ]}
          >
            <TouchableOpacity>
              <Ionicons
                name="ios-videocam"
                size={25}
                color={colors.defaultRed}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.statsBox}>
            <TouchableOpacity>
              <Feather
                name="message-circle"
                size={25}
                color={colors.defaultRed}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            alignContent: "center",
            paddingTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: colors.textGray }}>
            Business Consultant
          </Text>
          <Text style={{ fontSize: 16, color: colors.textGray }}>
            Sillicon Valley,CA
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              paddingTop: 10,
              paddingHorizontal: 15,
            }}
          >
            Erlich Bachman is a software designer, founder of the company
            Aviato, and was a main character in HBO's Silicon Valley.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: colors.textGray,
            borderBottomWidth: 0.5,
            marginHorizontal: 40,
            marginVertical: 20,
          }}
        ></View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 20 }}>Skills</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.skillContainer}>
              <Ionicons
                name="logo-facebook"
                size={45}
                color={colors.defaultRed}
                style={{ paddingVertical: 5 }}
              />
              <Text
                style={{ fontSize: 14, color: "#f1f1f1", textAlign: "center" }}
              >
                Facebook Marketing
              </Text>
            </View>
            <View style={styles.skillContainer}>
              <Ionicons
                name="logo-usd"
                size={45}
                color={"white"}
                style={{ paddingVertical: 5 }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: "#f1f1f1",
                  textAlign: "center",
                  paddingTop: 10,
                }}
              >
                Sales
              </Text>
            </View>
            <View style={styles.skillContainer}>
              <Ionicons
                name="logo-javascript"
                size={45}
                color={"yellow"}
                style={{ paddingVertical: 5 }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: "#f1f1f1",
                  textAlign: "center",
                  paddingTop: 10,
                }}
              >
                Javascript
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 20 }}>Experience</Text>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{ borderLeftColor: colors.textGray, borderLeftWidth: 1 }}
            ></View>
            <View style={{ marginHorizontal: 80, width: "60%" }}>
              <Text style={{ fontSize: 18, color: colors.textGray }}>
                Co-founder and CEO at Pied Piper
              </Text>
              <Text
                style={{ fontSize: 17, color: colors.textGray, paddingTop: 5 }}
              >
                2012-present
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{
                borderLeftColor: colors.textGray,
                borderLeftWidth: 1,
                marginVertical: 15,
              }}
            ></View>
            <View style={{ marginHorizontal: 80, width: "60%" }}>
              <Text style={{ fontSize: 18, color: colors.textGray }}>
                Managing Director at Alphaber Inc
              </Text>
              <Text
                style={{ fontSize: 17, color: colors.textGray, paddingTop: 5 }}
              >
                2018-present
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{ borderLeftColor: colors.textGray, borderLeftWidth: 1 }}
            ></View>
            <View style={{ marginHorizontal: 80, width: "60%" }}>
              <Text style={{ fontSize: 18, color: colors.textGray }}>
                Sales Director at Facebook Company
              </Text>
              <Text
                style={{ fontSize: 16, color: colors.textGray, paddingTop: 5 }}
              >
                2017-2018
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{ borderLeftColor: colors.textGray, borderLeftWidth: 1 }}
            ></View>
            <View style={{ marginHorizontal: 80, width: "60%" }}>
              <Text style={{ fontSize: 18, color: colors.textGray }}>
                CTO at Oracle Tech Company
              </Text>
              <Text
                style={{ fontSize: 17, color: colors.textGray, paddingTop: 5 }}
              >
                2014-2017
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{
                borderLeftColor: colors.textGray,
                borderLeftWidth: 1,
                marginVertical: 15,
              }}
            ></View>
            <View style={{ marginHorizontal: 80, width: "60%" }}>
              <Text style={{ fontSize: 18, color: colors.textGray }}>
                Managing Director at Virgin Group of Company
              </Text>
              <Text
                style={{ fontSize: 17, color: colors.textGray, paddingTop: 5 }}
              >
                2012-2014
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View
              style={{ borderLeftColor: colors.textGray, borderLeftWidth: 1 }}
            ></View>
            <View style={{ marginHorizontal: 80, width: "60%" }}>
              <Text style={{ fontSize: 18, color: colors.textGray }}>
                Sales man at Myanmar Bayarkyaw Inc
              </Text>
              <Text
                style={{ fontSize: 16, color: colors.textGray, paddingTop: 5 }}
              >
                2008-2012
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18 }}>Get Apointment</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 20,
            }}
          >
            <View style={{ marginLeft: 20 }}>
              <TouchableOpacity onPress={showDatepicker}>
                <Text style={styles.datePicker}>SelectDate</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity onPress={showTimepicker}>
                <Text style={styles.datePicker}>Select Time</Text>
              </TouchableOpacity>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#52575D",
  },
  subText: {
    fontSize: 12,
    color: "#52575d",
    textTransform: "uppercase",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  header: {
    backgroundColor: colors.defaultRed,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    marginTop: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "black",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  skillContainer: {
    alignContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    backgroundColor: colors.textGray,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 20,
  },
  datePicker: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: colors.defaultRed,
    fontSize: 16,
    color: "white",
  },
});

export default ConsultantProfile;

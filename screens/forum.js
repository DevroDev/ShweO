import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import { colors } from "../assets/style";
import { Feather, Ionicons } from "@expo/vector-icons";

const Forum = ({ navigation }) => {
  const [consultant] = useState([
    {
      image: {
        uri: "https://miro.medium.com/max/3002/1*dP81IJq-tGFxy1rIK3RYsg.png",
      },
      title: "Health",
      key: "1",
      icon: "ios-pulse",
    },
    {
      image: {
        uri:
          "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjF9&w=1000&q=80",
      },
      title: "Business",
      key: "2",
      icon: "ios-briefcase",
    },
    {
      image: {
        uri:
          "https://www.pictorem.com/collection/900_Rizwana-Khan_Purple%20Gradient%20Background.jpg",
      },
      title: "Career",
      key: "3",
      icon: "ios-desktop",
    },
    {
      image: {
        uri:
          "https://www.freevector.com/uploads/vector/preview/30355/Fluid_Gradient_Background.jpg",
      },
      title: "Mental Health",
      key: "4",
      icon: "ios-hourglass",
    },
    {
      image: {
        uri:
          "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-liquid-gradient-fluid-fluid-gradient-background-image_38329.jpg",
      },
      title: "Fitness",
      key: "5",
      icon: "ios-fitness",
    },
    {
      image: {
        uri:
          "https://i.pinimg.com/originals/e2/13/01/e2130168bf77bb762187ec5f8c4bc949.jpg",
      },
      title: "Sales",
      key: "6",
      cate: "Start Up Consultant",
      icon: "ios-trending-up",
    },
    {
      image: {
        uri:
          "https://us.123rf.com/450wm/djvstock/djvstock1904/djvstock190408679/124062427-gradient-background-night-stars-desert-vector-illustration.jpg?ver=6",
      },
      title: "Education",
      key: "7",
      icon: "ios-school",
    },
  ]);
  const [consultantProfile] = useState([
    {
      image: {
        uri:
          "https://hips.hearstapps.com/esq.h-cdn.co/assets/17/25/1498080333-tj-miller.jpg",
      },
      name: "Erlic Backman",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder of Microsoft",
      key: "1",
    },
    {
      image: {
        uri:
          "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1686,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1600/fl_lossy,q_auto/v1588038759/200427-last-laugh-Middleditch-tease_u69xgy",
      },
      name: "Richard Handricks",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder",
      key: "2",
    },
    {
      image: {
        uri:
          "https://cdn1.thr.com/sites/default/files/2018/05/jimmy_yang_4-h_2018.jpg",
      },
      name: "Jian Yang",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder",
      key: "3",
    },
    {
      image: {
        uri:
          "https://mms.businesswire.com/media/20180613005520/en/663164/5/Martin_Starr.jpg",
      },
      name: "Gilfoyle",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder",
      key: "4",
    },
    {
      image: {
        uri:
          "https://www1.pictures.zimbio.com/gi/Kumail+Nanjiani+Premiere+HBO+Silicon+Valley+_MAbBSOc4KHl.jpg",
      },
      name: "Dinesh",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder",
      key: "5",
    },
    {
      image: {
        uri:
          "https://pmcvariety.files.wordpress.com/2019/02/zach-woods.jpg?w=681&h=383&crop=1",
      },
      name: "Jared Dunn",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder",
      key: "6",
    },
    {
      image: {
        uri:
          "https://superstarsbio.com/wp-content/uploads/2019/09/amanda-crew.jpg",
      },
      name: "Monica",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder",
      key: "7",
    },
    {
      image: { uri: "https://www.celebheights.com/xr/m/matt-ross.jpg" },
      name: "Galvin Belson",
      desc:
        "Consulting is the business of providing expert advice to a specific group of people",
      exp: "co-founder",
      key: "8",
    },
  ]);
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
            Consultant
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
        <View>
          <View style={styles.headerContianer}>
            <Text
              style={{
                fontSize: 20,
                marginTop: 30,
                marginLeft: 30,
                color: colors.textGray,
              }}
            >
              Find Your
            </Text>
            <Text style={{ fontSize: 25, marginLeft: 30, fontWeight: "bold" }}>
              Consultant
            </Text>
            <TextInput
              style={styles.searchBox}
              placeholder="Search By Name"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={{
                position: "absolute",
                top: 125,
                right: 60,
                opacity: 0.6,
              }}
            />
          </View>

          <View>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={{ fontSize: 24, marginLeft: 10, marginTop: 30 }}>
                Category
              </Text>
              <Text
                style={{
                  marginRight: 10,
                  marginTop: 30,
                  alignSelf: "center",
                  color: colors.textGray,
                }}
              >
                View All
              </Text>
            </View>
            <FlatList
              horizontal={true}
              data={consultant}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ConsultantList")}
                    >
                      <Image
                        source={item.image}
                        style={styles.imageContainer}
                      ></Image>
                      <Ionicons
                        name={item.icon}
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          top: 50,
                        }}
                        size={30}
                        color={"white"}
                      />
                      <Text
                        style={{
                          position: "absolute",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 15,
                          alignSelf: "center",
                          top: 90,
                        }}
                      >
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>

          <View>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={{ fontSize: 24, marginLeft: 10, marginTop: 30 }}>
                Recommended for You
              </Text>
              <Text
                style={{
                  marginRight: 10,
                  marginTop: 30,
                  alignSelf: "center",
                  color: colors.textGray,
                }}
              >
                View All
              </Text>
            </View>

            <FlatList
              data={consultantProfile}
              renderItem={({ item }) => {
                return (
                  <View style={styles.blogContainer}>
                    <Image
                      source={item.image}
                      style={{ height: 120, width: 120, marginHorizontal: 5 }}
                    ></Image>
                    <View
                      style={{
                        width: "65%",
                        alignSelf: "center",
                        paddingLeft: 5,
                      }}
                    >
                      <Text style={{ fontSize: 20 }}>{item.name}</Text>
                      <Text style={{ fontSize: 12, color: colors.textGray }}>
                        {item.desc}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingTop: 10,
                        }}
                      >
                        <Text style={{ fontSize: 15, color: colors.textGray }}>
                          {item.exp}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
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
  headerContianer: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 30,
    padding: 12,
    borderColor: colors.textGray,
    borderWidth: 0.5,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  imageContainer: {
    width: 120,
    height: 120,
    marginTop: 20,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  blogContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default Forum;

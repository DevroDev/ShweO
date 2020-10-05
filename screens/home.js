import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { colors } from "../assets/style";

const Home = ({ navigation }) => {
  const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53", "#8b6f43"];

  const [recomended] = useState([
    {
      image: {
        uri:
          "https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png",
      },
      title: "React Native Course",
      key: "1",
      price: "MMK 150000",
      desc: "Everything You Need To Start Selling Online Today.",
    },
    {
      image: {
        uri:
          "https://www.lindamandarin.com.sg/wp-content/uploads/2015/12/business-chinese-language.jpg",
      },
      title: "Facebook marketing",
      key: "5",
      price: "MMK 25000",
      desc: "Everything You Need To Start Selling Online Today.",
    },
    {
      image: {
        uri:
          "https://it.com.sg/wp-content/uploads/2019/10/business-analytics-course-singapore.jpg",
      },
      title: "Business 101",
      key: "2",
      price: "MMK 29999",
      desc: "Everything You Need To Start Selling Online Today.",
    },
    {
      image: {
        uri:
          "https://www.inreads.com/wp-content/uploads/2017/02/money-matters.jpg",
      },
      title: "Digital Marketing",
      key: "3",
      price: "MMK 34500",
      desc: "Everything You Need To Start Selling Online Today.",
    },
    {
      image: {
        uri:
          "https://jobzey.com/wp-content/uploads/2019/12/10-Best-Business-Analytics-Certification-Course-2020-e.jpg",
      },
      title: "Enterpreneurship",
      key: "4",
      price: "MMK 45500",
      desc: "Everything You Need To Start Selling Online Today.",
    },
  ]);

  const [business] = useState([
    {
      image: {
        uri:
          "https://www.inreads.com/wp-content/uploads/2017/02/money-matters.jpg",
      },
      title: "Facebook Marketing",
      key: "1",
      price: "MMK 45000",
    },
    {
      image: {
        uri:
          "https://yimandarin.com.sg/wp-content/uploads/2019/07/Adult-Courses-e1564034780623.jpg",
      },
      title: "Business 101",
      key: "2",
      price: "MMK 35400",
    },
    {
      image: {
        uri:
          "https://it.com.sg/wp-content/uploads/2019/10/business-analytics-course-singapore.jpg",
      },
      title: "Digital Marketing",
      key: "3",
      price: "MMK 65000",
    },
    {
      image: {
        uri:
          "https://www.delengua.es/sites/default/files/2016-10/SpanishBusiness_0.jpg",
      },
      title: "Enterpreneurship",
      key: "4",
      price: "MMK 43500",
    },
  ]);

  const [computerScience] = useState([
    {
      image: {
        uri: "https://img-a.udemycdn.com/course/240x135/2383526_5670_2.jpg",
      },
      title: "Java Course",
      key: "1",
      price: "MMK 85000",
    },
    {
      image: {
        uri:
          "https://static.businessinsider.sg/2020/04/04/5e875b2373d0c837a6439875.jpeg",
      },
      title: "Learn C++",
      key: "2",
      price: "MMK 45000",
    },
    {
      image: {
        uri:
          "https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png",
      },
      title: "React Native Course",
      key: "3",
      price: "MMK 150000",
    },
    {
      image: {
        uri:
          "https://www.skillsglobe.com/wp-content/uploads/2014/02/Courses-Inner-Page-03.png",
      },
      title: "Learn Web Dev",
      key: "4",
      price: "MMK 24500",
    },
  ]);

  const [language] = useState([
    {
      image: {
        uri: "https://miro.medium.com/max/1024/1*-up26i5EgYFzH8aMdBTGNQ.jpeg",
      },
      title: "Learn Japanese",
      key: "1",
      price: "MMK 82500",
    },
    {
      image: {
        uri:
          "https://www.fluentin3months.com/wp-content/uploads/2017/10/french-exercises-online.jpg",
      },
      title: "Learning French",
      key: "2",
      price: "MMK 35000",
    },
    {
      image: {
        uri:
          "https://www.fluentin3months.com/wp-content/uploads/2015/09/free-online-spanish-language-lessons.jpg",
      },
      title: "Learn Spanish",
      key: "3",
      price: "MMK 45000",
    },
    {
      image: {
        uri:
          "https://lindamandarin.com.sg/wp-content/uploads/2016/12/learn-Mandarin-online-1024x683-300x200.jpg",
      },
      title: "Learn Chinese",
      key: "4",
      price: "MMK 70000",
    },
  ]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={{ flex: 1, paddingTop: 12, paddingLeft: 15 }}>
            <Ionicons
              name="ios-infinite"
              color={"white"}
              size={30}
              style={{}}
            />
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
              Home
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
      </View>
      <ScrollView>
        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Comming Soon
            </Text>
          </View>
          <View style={styles.runningCourseContainer}>
            <Image
              source={require("../assets/img/running.png")}
              style={{ width: 180, height: 180, marginHorizontal: 10 }}
            ></Image>
            <View style={{ width: 180, marginVertical: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.defaultRed,
                }}
              >
                Digital Marketing 101 for Beginner
              </Text>
              <Text
                style={{ fontSize: 14, paddingTop: 5, color: colors.textGray }}
              >
                Everything You Need To Start Selling Online Today.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View>
                  <Text style={{ fontSize: 12, color: colors.textGray }}>
                    Starting On
                  </Text>
                  <Text style={{ fontSize: 16, color: colors.defaultRed }}>
                    5/19/2020
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 12, color: colors.textGray }}>
                    Price
                  </Text>
                  <Text style={{ fontSize: 16, color: colors.defaultRed }}>
                    30000Ks
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Recomended for You
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={recomended}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingLeft: 10, marginRight: 4 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                    <View style={styles.courseContainer}>
                      <Image source={item.image} style={styles.courseImage} />
                      <Text
                        style={{
                          color: colors.defaultRed,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ color: colors.textGray, fontSize: 14 }}>
                        Everything You Need To Start Selling Online Today.
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {starColors.map((color, index) => {
                          return (
                            <Feather
                              name="star"
                              size={18}
                              color={color}
                              key={index}
                              style={{ marginVertical: 5, marginRight: 5 }}
                            />
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.priceButton}>{item.price}</Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.defaultRed,
                            alignSelf: "center",
                          }}
                        >
                          View Detail
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Best Course in Business
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={business}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingLeft: 10, marginRight: 4 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                    <View style={styles.courseContainerSmall}>
                      <Image
                        source={item.image}
                        style={styles.courseImageSmall}
                      />
                      <Text
                        style={{
                          color: colors.defaultRed,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ color: colors.textGray, fontSize: 14 }}>
                        Everything You Need To Start Selling Online Today.
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {starColors.map((color, index) => {
                          return (
                            <Feather
                              name="star"
                              size={18}
                              color={color}
                              key={index}
                              style={{ marginVertical: 5, marginRight: 5 }}
                            />
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.priceButton}>{item.price}</Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.defaultRed,
                            alignSelf: "center",
                          }}
                        >
                          View Detail
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Choose by Categories
          </Text>
        </View>

        <View style={styles.descsContainer}>
          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#ad0a0a",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-desktop" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>IT</Text>
          </View>

          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#9f0aad",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-briefcase" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>Business</Text>
          </View>

          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#ad0a82",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-film" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>Video Editing</Text>
          </View>

          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#0a95ad",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-snow" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>Electronics</Text>
          </View>

          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#486e0b",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-keypad" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>Language</Text>
          </View>

          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#19868a",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-musical-notes" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>Music</Text>
          </View>

          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#50198a",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-fitness" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>Fitness</Text>
          </View>

          <View style={styles.descContainer}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: "#8a8819",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-podium" size={35} color={"white"} />
            </View>
            <Text style={styles.descName}>Accounting</Text>
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Best in ComputerScience
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={computerScience}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingLeft: 10, marginRight: 4 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                    <View style={styles.courseContainer}>
                      <Image source={item.image} style={styles.courseImage} />
                      <Text
                        style={{
                          color: colors.defaultRed,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ color: colors.textGray, fontSize: 14 }}>
                        Everything You Need To Start Selling Online Today.
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {starColors.map((color, index) => {
                          return (
                            <Feather
                              name="star"
                              size={18}
                              color={color}
                              key={index}
                              style={{ marginVertical: 5, marginRight: 5 }}
                            />
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.priceButton}>{item.price}</Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.defaultRed,
                            alignSelf: "center",
                          }}
                        >
                          View Detail
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Best in Language
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={language}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingLeft: 10, marginRight: 4 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                    <View style={styles.courseContainerSmall}>
                      <Image
                        source={item.image}
                        style={styles.courseImageSmall}
                      />
                      <Text
                        style={{
                          color: colors.defaultRed,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ color: colors.textGray, fontSize: 14 }}>
                        Everything You Need To Start Selling Online Today.
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {starColors.map((color, index) => {
                          return (
                            <Feather
                              name="star"
                              size={18}
                              color={color}
                              key={index}
                              style={{ marginVertical: 5, marginRight: 5 }}
                            />
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.priceButton}>{item.price}</Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.defaultRed,
                            alignSelf: "center",
                          }}
                        >
                          View Detail
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Recomended for You
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={recomended}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingLeft: 10, marginRight: 4 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                    <View style={styles.courseContainer}>
                      <Image source={item.image} style={styles.courseImage} />
                      <Text
                        style={{
                          color: colors.defaultRed,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ color: colors.textGray, fontSize: 14 }}>
                        Everything You Need To Start Selling Online Today.
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {starColors.map((color, index) => {
                          return (
                            <Feather
                              name="star"
                              size={18}
                              color={color}
                              key={index}
                              style={{ marginVertical: 5, marginRight: 5 }}
                            />
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.priceButton}>{item.price}</Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.defaultRed,
                            alignSelf: "center",
                          }}
                        >
                          View Detail
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Best Course in Business
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={business}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingLeft: 10, marginRight: 4 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                    <View style={styles.courseContainerSmall}>
                      <Image
                        source={item.image}
                        style={styles.courseImageSmall}
                      />
                      <Text
                        style={{
                          color: colors.defaultRed,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text style={{ color: colors.textGray, fontSize: 14 }}>
                        Everything You Need To Start Selling Online Today.
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        {starColors.map((color, index) => {
                          return (
                            <Feather
                              name="star"
                              size={18}
                              color={color}
                              key={index}
                              style={{ marginVertical: 5, marginRight: 5 }}
                            />
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.priceButton}>{item.price}</Text>
                        <Text
                          style={{
                            fontSize: 14,
                            color: colors.defaultRed,
                            alignSelf: "center",
                          }}
                        >
                          View Detail
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    backgroundColor: colors.defaultRed,
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  runningCourseContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    marginBottom: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  courseContainer: {
    paddingVertical: 5,
    marginHorizontal: 2,
    width: 250,
  },
  courseImage: {
    width: 250,
    height: 150,
    marginBottom: 5,
  },

  courseContainerSmall: {
    paddingVertical: 5,
    width: 200,
  },
  courseImageSmall: {
    width: 200,
    height: 100,
    marginBottom: 5,
  },
  priceButton: {
    fontSize: 15,
    color: colors.defaultRed,
  },
  descsContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  descContainer: {
    alignItems: "center",
    width: 95,
  },
  description: {
    width: 70,
    height: 70,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center",
  },
  descName: {
    color: "black",
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;

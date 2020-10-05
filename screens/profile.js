import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = () => {
  const profileImage = {
    uri:
      "http://nonplusmyanmar.com/labeled_images/Pyae%20Htet%20Shein/IMG_3167.jpg",
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
          <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={profileImage}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Pyae Htet Shein
          </Text>
          <Text style={styles.text}>Studies IT</Text>
        </View>
        <View style={styles.statContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>3</Text>
            <Text style={[styles.text, styles.subText]}>Course Enroll</Text>
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
            <Text style={[styles.text, { fontSize: 24 }]}>5</Text>
            <Text style={[styles.text, styles.subText]}>Course Finished</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>2</Text>
            <Text style={[styles.text, styles.subText]}>Certificates</Text>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 25, marginTop: 20, paddingLeft: 12 }}>
            Recentely Learning
          </Text>
        </View>

        <View style={{ marginTop: 18 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={{
                    uri: "http://nonplusmyanmar.com/img/img%20(10).png",
                  }}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={{
                    uri: "http://nonplusmyanmar.com/img/img%20(6).png",
                  }}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={{
                    uri: "http://nonplusmyanmar.com/img/img%20(8).png",
                  }}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={{
                    uri: "http://nonplusmyanmar.com/img/img%20(2).png",
                  }}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={{
                    uri: "http://nonplusmyanmar.com/img/img%20(5).png",
                  }}
                  style={styles.image}
                  resizeMode="cover"
                ></Image>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "300" }}>
              5
            </Text>
            <Text style={{ fontSize: 16, color: "white" }}>Courses</Text>
          </View>
        </View>

        <Text style={[styles.recent, styles.subText]}>Recent Activity</Text>

        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text style={{ color: "#41444b", fontWeight: "300" }}>
                Starting <Text style={{ fontWeight: "400" }}> Java Course</Text>
              </Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text style={{ color: "#41444b", fontWeight: "300" }}>
                Finished{" "}
                <Text style={{ fontWeight: "400" }}> Python Course</Text>
              </Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text style={{ color: "#41444b", fontWeight: "300" }}>
                Starting{" "}
                <Text style={{ fontWeight: "400" }}> Web Design Course</Text>
              </Text>
            </View>
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
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
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
  mediaImageContainer: {
    width: 220,
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
    borderColor: "black",
  },
  mediaCount: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  recentItemIndicator: {
    backgroundColor: "#cabfab",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 6,
  },
});

export default Profile;

import { StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";

import Home from "./screens/home";
import Profile from "./screens/profile";
import Category from "./screens/category";
import Course from "./screens/myCourse";
import Forum from "./screens/forum";

import Post from "./screens/enrollCourse";
import CategoryIT from "./screens/IT";
import Lessons from "./detail screens/myLessons";
import { colors } from "./assets/style";

import ReactVideo from "./Video/ReactVideo";

import LoadingScreen from "./loading/loadingScreen";

import LoginScreen from "./Auth screens/loginScreen";
import RegisterScreen from "./Auth screens/registerScreen";
import LandingPage1 from "./Auth screens/landingPage1";
import LandingPage2 from "./Auth screens/landingPage2";
import LandingPage3 from "./Auth screens/landingPage3";
import PaymentScreen from "./detail screens/pay";
import ConsultantList from "./detail screens/consultantList";
import consultantProfile from "./detail screens/consultantProfile";
import ConsultantProfile from "./detail screens/consultantProfile";

var firebaseConfig = {
  apiKey: "AIzaSyA8KNJ5RQyNnnPM8hyMcq2n9c-Oyt2Ui-g",
  authDomain: "giggag-21c02.firebaseapp.com",
  databaseURL: "https://giggag-21c02.firebaseio.com",
  projectId: "giggag-21c02",
  storageBucket: "giggag-21c02.appspot.com",
  messagingSenderId: "921632215493",
  appId: "1:921632215493:web:5a46ac12f02c52042b3bac",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="LandingPage1"
        component={LandingPage1}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="LandingPage2"
        component={LandingPage2}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="LandingPage3"
        component={LandingPage3}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={navOptionHandler} />
      <Stack.Screen name="Post" component={Post} options={navOptionHandler} />
      <Stack.Screen
        name="Pay"
        component={PaymentScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Lessons"
        component={Lessons}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="ReactVideo"
        component={ReactVideo}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}

function CategoryStack() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="Category"
        component={Category}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="CategoryIT"
        component={CategoryIT}
        options={navOptionHandler}
      />
      <Stack.Screen name="Post" component={Post} options={navOptionHandler} />
    </Stack.Navigator>
  );
}

function ForumStack() {
  return (
    <Stack.Navigator initialRouteName="Forum">
      <Stack.Screen name="Forum" component={Forum} options={navOptionHandler} />
      <Stack.Screen
        name="ConsultantList"
        component={ConsultantList}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="ConsultantProfile"
        component={ConsultantProfile}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="Pay"
        component={PaymentScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRoute="Forum"
      activeColor="white"
      inactiveColor="white"
      style={{ backgroundColor: colors.defaultRed }}
      barStyle={{ backgroundColor: colors.defaultRed, padding: 4 }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={CategoryStack}
        options={{
          tabBarLabel: "Category",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Course"
        component={Course}
        options={{
          tabBarLabel: "My Course",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="play-circle"
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Forum"
        component={ForumStack}
        options={{
          tabBarLabel: "Forum",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="globe" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={navOptionHandler}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={navOptionHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

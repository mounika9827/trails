import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Verification } from "@/src/screens/auth";
import Home from "@/src/screens/main/Home";
import Categories from "@/src/screens/main/Categories";
import Profile from "@/src/screens/main";
import bottomTab from "../BottomTab";
import BottomTab from "../BottomTab";

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Verification" component={Verification} />
      <MainStack.Screen name="Signup" component={Signup} />
      <MainStack.Screen name="Categories" component={Categories} />
      <MainStack.Screen name="Profile" component={Profile} />
      <MainStack.Screen name="BottomTab" component={BottomTab} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;

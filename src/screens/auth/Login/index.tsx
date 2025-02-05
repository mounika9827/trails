
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation ,useIsFocused } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  const isLoginFocused = useIsFocused();
  return (
    <View>
      <View style={styles.start}>
        <Pressable>
        <Text style={[styles.startText, { color: isLoginFocused ? "#407BFF" : "#BEC6DC" }]}>
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
        <Text style={[styles.startText, { color: !isLoginFocused ? "#407BFF" : "#BEC6DC" }]}>
            Signup
          </Text>
        </Pressable>
      </View>
      <View style={styles.image}>
        <Image source={require("../../../assets/svg/human.png")} />
      </View>
      <Text style={styles.welcome}>Welcome To,</Text>
      <Text style={styles.userName}>Sri Venkateshwara Kirana General Store</Text>
      <TextInput
        placeholder="Enter your Email Address"
        style={styles.TextInput}
      />
      <TextInput placeholder="Password" 
      secureTextEntry={true}
       style={styles.TextInput} />
      <Pressable style={styles.button} 
      onPress={() => {
        navigation.navigate("BottomTab");
      }}>
        <Text className="justify-center items-center text-[#FFFFFF] bg-red-300"style={styles.startText}>LOG IN</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  start: {
    position: "relative",
    top: 48,
    marginLeft: 32,
    flexDirection: "row",
    gap: 10,
  },
  startText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15,
    color: "#407BFF",
  },
  image: {
    marginLeft: 200,
    marginTop: 127,
  },
  welcome: {
    marginLeft: 32,
    marginTop: 30,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 17,
  },
  userName: {
    marginLeft: 32,
    marginTop: 4,
    fontSize: 25,
    fontWeight: "400",
    lineHeight: 30,
  },
  TextInput: {
    margin: 10,
    textAlign: "center",
    height: 44,
    borderRadius: 10,
    borderColor: "#BEC6D7",
    borderWidth: 1,
  },
  button: {
    marginTop: 190,
    margin: 10,
    backgroundColor: "#407BFF",
    height: 44,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    color: "#FFFFFF",
    textAlign: "center",
    margin: 13,
  },
  lastText: {
    margin: 15,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15,
    textAlign: "center",
  },
  lastText1: {
    color: "#407BFF",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15,
    textAlign: "center",
  },
});
export default Login;

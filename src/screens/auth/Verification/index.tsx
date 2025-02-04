import React from "react";
import { View, Text, Image, StyleSheet, Pressable, TextInput } from "react-native";

const VerifyScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.image}>
        <Image source={require("../../../assets/svg/notification.png")} />
      </View>
      <Text style={styles.verifyText}>Verification code</Text>
      <Text style={styles.verifyText1}>
        Verification code has been sent {"\n"}to your mobile successfully
      </Text>
   <TextInput  style={styles.verifyCode}/>
      <Text style={styles.verifyText2}>Resend Code</Text>
      <View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>VERIFY</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    marginTop: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyText: {
    marginTop: 60,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 22,
  },
  verifyText1: {
    marginTop: 12,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,
    color: "#808080",
  },
  verifyCode:{
    borderWidth:2,
    borderColor:"#BEC6D7",
    borderRadius:8,
    height:40,
    marginTop:60,
    margin:10
  },
  verifyText2: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 16,
    color: "#407BFF",
  },
  button: {
    marginTop: 250,
    margin: 10,
    backgroundColor: "#407BFF",
    height: 44,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 15,
    color: "#FFFFFF",
    textAlign: "center",
    margin: 13,
  },
});
export default VerifyScreen;

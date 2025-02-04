import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation ,useIsFocused } from "@react-navigation/native";
const Signup = () => {
    const navigation = useNavigation();
    const isSignupFocused = useIsFocused();
  return (
    <View>
      <View style={styles.start}>
        <Pressable  onPress={() => {
            navigation.navigate("Login");
          }}>
        <Text style={[styles.startText, { color: !isSignupFocused ? "#407BFF" : "#BEC6DC" }]}>
            Login
          </Text>
        </Pressable>
       <Pressable>
       <Text style={[styles.startText, { color: isSignupFocused ? "#407BFF" : "#BEC6DC" }]}>
         Signup
          </Text>
       </Pressable>
      </View>
      <Text style={styles.text1}>Join us today</Text>
      <TextInput placeholder="Name" style={styles.TextInput} />
      <TextInput placeholder="Phone Number"   numberOfLines={10}  keyboardType="numeric" style={styles.TextInput} />
      <TextInput placeholder="Email" style={styles.TextInput} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.TextInput} />
      <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.TextInput} />
      <TextInput placeholder="Address" style={styles.TextInput} />
     
      <Pressable style={styles.button} onPress={() => {
            navigation.navigate("Login");
          }}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
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
  text1: {
    marginTop: 120,
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 30,
    marginLeft: 32,
  },
  TextInput: {
    position: "relative",
    top: 26,
    margin: 8,
    textAlign: "center",
    height: 44,
    borderRadius: 10,
    borderColor: "#BEC6D7",
    borderWidth: 1,
  },
  TextInput1: {
    position: "relative",
    top: 18,
    margin:12,
    textAlign: "center",
    height: 44,
    width: 150,
    borderRadius: 10,
    borderColor: "#BEC6D7",
    borderWidth: 1,
  },
  button: {
    marginTop: 170,
    margin: 10,
    backgroundColor: "#407BFF",
    height: 44,
    borderRadius: 20,
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
export default Signup;

import { View, Text, StyleSheet, Linking, Alert, Platform } from "react-native";
import React from "react";
import { Internet } from "../../assets/svg/notification.png";
import { Button } from "react-native-paper";

const NoInternetScreen = () => {

const handlePress = async () => {
  try {
    if (Platform.OS === "android") {
      await Linking.sendIntent("android.settings.WIRELESS_SETTINGS");
    } else {
      await Linking.openURL("App-Prefs:WIFI");
    }
  } catch (error) {
    console.error("Error opening network settings:", error);
    
    Alert.alert("Error", "Unable to open network settings.");
  }
};


  return (
    <View style={styles.container}>
      <Internet />
      <Text style={styles.text}>No Internet Connection</Text>
      <Text style={styles.subText}>
        Please check your network and try again.
      </Text>
      <View className="mb-4 mx-4 mt-4">
        <Button  onPress={handlePress}>
          <Text className="text-base text-center text-[#FFFFFF] font-inter600">
            To settings
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1.0)",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  subText: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
});

export default NoInternetScreen;

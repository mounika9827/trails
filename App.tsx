import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NoInternetScreen from "./src/components/Network";
import useNetworkStatus from "./src/hooks/useNetworkStatus";
import "./global.css"
import BiometricAuth from "./biometric";
const App = () => {
  const isConnected = useNetworkStatus();

  return (
    <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <NavigationContainer >
                <NavigationStack />
              </NavigationContainer>
              {/* {!isConnected && <NoInternetScreen />}
               */}
                <BiometricAuth />
            </SafeAreaView>
          </SafeAreaProvider>
  );
};

export default App;

import Profile from "@/src/screens/main";
import Categories from "@/src/screens/main/Categories";
import Home from "@/src/screens/main/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform } from "react-native";
import { homeIcon, categoryIcon, cartIcon } from "../../../assets/svg/index";
const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          // height:64,
          height: Platform.OS === "android" ? 64 : 50,
          backgroundColor: "#FFFFFF",
          shadowColor: "#696969",
          shadowOffset: { width: 12, height: 12 },
          shadowOpacity: 0.2,
          shadowRadius: 12,
          elevation: 12,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#407BFF",
        tabBarInactiveTintColor: "rgba(0, 0, 0, 0.5)",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/svg/homeIcon.png")}
              style={{ height: 35, width: 35 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        listeners={({ navigation }) => ({
          tabPress: () => {
            navigation.navigate("Categories", { categoryName: "All" });
          },
        })}
        options={{
          title: "Home",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/svg/categoryIcon.png")}
              style={{ height: 35, width: 35 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/svg/cartIcon.png")}
              style={{ height: 35, width: 35 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;

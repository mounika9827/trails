import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { Grocery } from "../../../constants/landing";
import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from 'expo-linear-gradient';
const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const toCategory = (name: any) => {
    navigation.navigate("Categories", { categoryName: name });
  };
  
  const Item = ({ name, image }: any) => (
    <Pressable
      style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
      onPress={() => toCategory(name)}
    >
      <Image
        source={image}
        style={{ width: 70, height: 70, marginRight: 10 }}
      />
      <Text>{name}</Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../../assets/svg/user.png")}
          style={{
            width: 40,
            height: 40,
            position: "relative",
            top: 45,
            left: 20,
          }}
        />
        <Text style={styles.deliverText}>Hi Pandu,</Text>
        <Text style={styles.location}>Karmanghat, Sri Laxmi Theatre</Text>
      </View>
      <View style={styles.searchBar}>
        <Searchbar
          placeholder="Search for Grocery"
          onChangeText={setSearchQuery}
          value={searchQuery}
          clearIcon={false}
        />
      </View>
      <Text style={styles.categoryText}>Categories</Text>
      <FlatList
        data={Grocery}
        renderItem={({ item }) => <Item name={item.name} image={item.image} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ backgroundColor: "blue" }}>
        <Text style={styles.lastText}>Just Tap on</Text>
        <Text style={styles.lastText1}>
          Order It & Get Delivered By Tomorrow
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deliverText: {
    marginTop: 43,
    marginLeft: 40,
    fontSize: 18,
    fontWeight: "800",
  },
  location: {
    position: "relative",
    right: 75,
    top: 68,
    fontSize: 15,
    fontWeight: "600",
  },
  searchBar: {
    position: "relative",
    top: 40,
    borderRadius: 20,
    margin: 10,
  },
  categoryText: {
    marginTop: 45,
    fontWeight: "800",
    fontSize: 20,
    marginLeft: 20,
  },
  lastText: {
    position: "relative",
    top: -10,
    left: 10,
    fontSize: 27,
    fontWeight: "900",
    color: "white",
  },
  lastText1: {
    position: "relative",
    top: -5,
    left: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "white",
  },
  linearGradient: {
    paddingTop: 18,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 20,
  },
});

export default Home;

import React from "react";
import { Text, View, StyleSheet } from "react-native";


const Cart = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <Text style={styles.cartInfo}>
      hjgrjkfuj
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cartInfo: {
    fontSize: 18,
  },
});

export default Cart;

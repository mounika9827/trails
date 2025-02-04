import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Grocery } from "@/src/constants/kitchen";

const Item = ({ Name, Quantity, Price, Picture, onAddToCart }: any) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = () => {
    setCartQuantity(1);
    onAddToCart(1);
  };

  const increaseQuantity = () => {
    setCartQuantity(cartQuantity + 1);
    onAddToCart(1);
  };

  const decreaseQuantity = () => {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
      onAddToCart(-1);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={Picture} style={styles.image} />
      <Text style={styles.name}>{Name}</Text>
      <Text style={styles.quantity}>Quantity: {Quantity}</Text>
      <Text style={styles.price}>₹ {Price}</Text>
      {cartQuantity > 0 ? (
        <View style={styles.cartControls}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.cartQuantity}>{cartQuantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Categories = ({ route }: any) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [cartCount, setCartCount] = useState(0);
  const { categoryName } = route.params;
 console.log(categoryName);
  const categories = [
    "All",
    "Grocery & Kitchen",
    "Snacks",
    "Beauty & Personal Care",
    "HouseHold Essentials",
  ];

  useEffect(() => {
    if (categoryName) {
      setSelectedCategory(categoryName);
    } else {
      setSelectedCategory("All");
    }
  }, [categoryName]);

  const filteredItems =
    selectedCategory === "All"
      ? Grocery
      : Grocery.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (change) => setCartCount(cartCount + change);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.cartIconContainer}>
          <Icon name="cart-outline" size={35} color="#000" />
          {cartCount > 0 && <Text style={styles.cartCount}>{cartCount}</Text>}
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryHeader}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategory,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <Item
            Name={item.Name}
            Quantity={item.Quantity}
            Price={item.Price}
            Picture={item.Picture}
            onAddToCart={handleAddToCart}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    position: "absolute",

    top: -5,
    backgroundColor: "#FF0000",
    color: "#FFF",
    fontSize: 12,
    padding: 4,
    borderRadius: 5,
    fontWeight: "bold",
    minWidth: 18,
    textAlign: "center",
  },
  categoryHeader: {
    flexDirection: "row",
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  selectedCategory: {
    color: "#000",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: "#000",
  },
  list: {
    justifyContent: "space-around",
  },
  card: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  quantity: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#000",
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  cartControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    padding: 7,
    marginHorizontal: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  cartQuantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default Categories;

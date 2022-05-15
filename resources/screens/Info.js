import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import { SPACING } from "../constants/STYLES";
import { COLORS } from "./../constants/STYLES";

const Info = ({ navigation, route }) => {
  const product = route.params.product;

  useEffect(() => {
    navigation.setOptions({
      title: product.title + " Info",
    });
  }, []);

  return (
    <ScrollView
      // style={styles.container}
      contentContainerStyle={styles.container}
    >
      <Image source={product.logo} alt="logo" style={styles.image} />
      {product.description.map((item, i) => (
        <View key={i} style={styles.textContainer}>
          <Text style={styles.text}>- {item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: { padding: SPACING.screenPadding, alignItems: "center" },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textContainer: {
    marginBottom: SPACING.elementMargin,
  },
  text: {
    color: COLORS.primary800,
    // textAlign:
  },
});

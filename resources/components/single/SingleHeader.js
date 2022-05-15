import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { PRODUCTS } from "../../constants/DATA";
import { COLORS, SPACING } from "../../constants/STYLES";

const SingleHeader = ({ title, screenHeight }) => {
  const product = PRODUCTS.filter((p) => p.title === title)[0];
  console.log(screenHeight);

  return (
    <ImageBackground
      source={product.singleImage}
      style={{
        height: screenHeight * 0.35,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: "hidden",
      }}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Image
          source={product.logo}
          resizeMode="contain"
          alt={title}
          style={styles.image}
        />
        <Text style={styles.subTitle}>{product.subTitle}</Text>
      </View>
    </ImageBackground>
  );
};

export default SingleHeader;
const styles = StyleSheet.create({
  bgImage: {},
  overlay: {
    flex: 1,
    backgroundColor: "#95d4e5" + "90",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 80,
  },
  image: {
    width: 150,
    height: 75,
  },
  subTitle: {
    color: COLORS.primary600,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
});

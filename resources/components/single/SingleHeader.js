import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { PRODUCTS } from "../../constants/DATA";
import { COLORS, SPACING } from "../../constants/STYLES";
import { PROGRAMS } from "./../../constants/DATA";

const SingleHeader = ({ title, screenHeight, overlay, programScreen }) => {
  const item = programScreen
    ? PROGRAMS.filter((program) => program.title === title)[0]
    : PRODUCTS.filter((p) => p.title === title)[0];

  return (
    <ImageBackground
      source={programScreen ? item.image : item.singleImage}
      style={{
        height: screenHeight * 0.35,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: "hidden",
      }}
      blurRadius={2}
    >
      {overlay && (
        <View style={styles.overlay}>
          <Image
            source={item.logo}
            resizeMode="contain"
            alt={title}
            style={styles.image}
          />
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      )}
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

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SPACING } from "../constants/STYLES";
import { Image } from "react-native";
import IconButton from "./IconButton";

const CustomBox = ({ description, header, dark, image }) => {
  const [showMoreLink, setShowMoreLink] = useState(true);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dark ? COLORS.primary800 : "#fff" },
      ]}
    >
      {/* Text Container  */}
      <View style={styles.textContainer}>
        {/* Header  */}
        <View style={styles.headerContainer}>
          {header ? (
            <Text
              style={[
                styles.header,
                { color: dark ? "#fff" : COLORS.primary800 },
              ]}
            >
              {header}
            </Text>
          ) : (
            <Image
              source={require("../images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          )}
        </View>
        {/* description  */}
        <View>
          {/* Description  */}
          <Text style={styles.description}>
            {showMoreLink
              ? description.length > 120
                ? description.substring(0, 120).concat("...")
                : description
              : description}
          </Text>
          {/* Show More / Show Less Button  */}
          {description.length > 120 && (
            <IconButton
              icon={
                showMoreLink ? "chevron-down-outline" : "chevron-up-outline"
              }
              size="18"
              color={COLORS.secondary600}
              onPress={toggleShowMoreHandler}
            >
              {showMoreLink ? "  Show More" : "  Show Less"}
            </IconButton>
          )}
        </View>
      </View>
      {/* Image Container  */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../images/Award-Logo-TGE-CONTACT-FINANCIAL-HOLDING-300x300.png")}
        />
      </View>
    </View>
  );

  function toggleShowMoreHandler() {
    setShowMoreLink(!showMoreLink);
  }
};

export default CustomBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems: "center",
    padding: 20,
    borderRadius: 20,
    elevation: 9,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    // marginBottom: SPACING.elementMargin,
  },
  textContainer: {
    flex: 1,
  },
  logo: {
    height: 40,
    maxWidth: 90,
  },
  header: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "600",
  },
  description: {
    color: COLORS.textColor,
  },
  imageContainer: {
    width: "30%",
    height: 100,
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    resizeMode: "contain",
  },
});

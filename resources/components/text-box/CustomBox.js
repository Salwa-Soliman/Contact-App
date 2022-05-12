import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SPACING, STYLES } from "../../constants/STYLES";
import IconButton from "../ui/IconButton";

const CustomBox = ({ description, header, dark, image }) => {
  const [showMoreLink, setShowMoreLink] = useState(true);
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        STYLES.boxShadow,
        { backgroundColor: dark ? COLORS.primary800 : "#fff" },
      ]}
    >
      {/* Card  */}
      <View style={STYLES.row}>
        {/* Text Container  */}
        <View style={styles.textContainer}>
          {/* Header  */}
          <View style={styles.headerContainer}>
            {header ? (
              <Text
                style={[
                  STYLES.header,
                  { color: dark ? "#fff" : COLORS.primary800 },
                ]}
              >
                {header}
              </Text>
            ) : (
              <Image
                source={require("../../images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            )}
          </View>
          {/* description  */}
          <View>
            {/* text  */}
            <Text
              style={[
                styles.description,
                { color: dark ? "#999" : COLORS.textColor },
              ]}
            >
              {showMoreLink
                ? description.length > 120
                  ? description.substring(0, 120).concat("...")
                  : description
                : description}
            </Text>
            {/* Show More / Show Less Button  */}
            {description.length > 120 && (
              <IconButton
                icon={showMoreLink ? "arrow-down-thin" : "arrow-up-thin"}
                size="6"
                color={COLORS.secondary600}
                onPress={toggleShowMoreHandler}
              >
                {showMoreLink ? "Show More" : "Show Less"}
              </IconButton>
            )}
          </View>
        </View>
        {/* Image Container  */}
        <View style={styles.imageContainer}>
          <Image
            style={STYLES.image}
            source={require("../../images/Award-Logo-TGE-CONTACT-FINANCIAL-HOLDING-300x300.png")}
          />
        </View>
      </View>
      {/* Terms & Conditions  */}
      {dark && (
        <View style={STYLES.row}>
          <IconButton
            color={COLORS.secondary600}
            icon={"progress-question"}
            size={4}
            onPress={() => navigation.navigate("TermsAndConditions")}
          >
            Terms & Conditions
          </IconButton>
          <IconButton
            color={COLORS.secondary600}
            size={4}
            icon={"gift-outline"}
            onPress={() => navigation.navigate("Redeem")}
          >
            How to redeem?
          </IconButton>
        </View>
      )}
    </View>
  );

  function toggleShowMoreHandler() {
    setShowMoreLink(!showMoreLink);
  }
};

export default CustomBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
  },
  logo: {
    height: 40,
    maxWidth: 90,
  },
  description: {
    color: COLORS.textColor,
  },
  imageContainer: {
    width: "30%",
    height: 100,
  },
});

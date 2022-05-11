import { StyleSheet, View, useWindowDimensions, Text } from "react-native";
import React from "react";
import { COLORS, SPACING } from "./../constants/STYLES";

const CurvedHeader = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={[styles.container, { height: height * 0.15 }]}>
      <View>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.username}>Guest</Text>
      </View>
      <View>
        <Text style={styles.language}>Ar | En</Text>
      </View>
    </View>
  );
};

export default CurvedHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: COLORS.primary800,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: SPACING.screenPadding,
    paddingHorizontal: SPACING.screenPadding,
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: -1,
    position: "absolute",
    top: 0,
  },
  welcome: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  username: {
    color: COLORS.secondary600,
  },
  language: {
    color: "#fff",
  },
});

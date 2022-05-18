import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SPACING, STYLES } from "../../constants/STYLES";

const Content = ({ children, height }) => {
  return (
    <View
      style={[
        styles.container,
        STYLES.boxShadow,
        { marginTop: height * -0.05 },
      ]}
    >
      {children}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal: SPACING.elementMargin,
    padding: SPACING.screenPadding,
    flex: 1,
  },
});

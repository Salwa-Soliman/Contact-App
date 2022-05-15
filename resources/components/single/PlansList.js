import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../../constants/STYLES";
import { ScrollView } from "native-base";
import Title from "./Title";
import Plan from "./Plan";

const PlansList = ({ screenHeight, title, plans }) => {
  return (
    <ScrollView
      mt={-screenHeight * 0.05}
      style={styles.container}
      shadow={5}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <Title />
      {plans.map((plan, i) => (
        <Plan key={i} plan={plan} />
      ))}
    </ScrollView>
  );
};

export default PlansList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal: SPACING.elementMargin,
    padding: SPACING.screenPadding,
    flex: 1,
  },
});

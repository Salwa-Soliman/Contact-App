import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../../constants/STYLES";
import { ScrollView } from "native-base";
import Title from "./Title";
import Plan from "./Plan";
import LoanCalculator from "./LoanCalculator";

const PlansList = ({ screenHeight, title, plans }) => {
  return (
    <ScrollView shadow={5} contentContainerStyle={{ paddingBottom: 10 }}>
      {plans.map((plan, i) => (
        <Plan key={i} plan={plan} />
      ))}
      <LoanCalculator />
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

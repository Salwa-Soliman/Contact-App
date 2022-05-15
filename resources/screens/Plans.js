import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import PlansList from "../components/single/PlansList";
import { PLANS } from "./../constants/DATA";
import Plan from "../components/single/Plan";
import { SPACING } from "../constants/STYLES";
const Plans = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: SPACING.screenPadding * 2 }}
    >
      <Image source={require("../images/logo.png")} style={styles.image} />
      {PLANS.map((plan, i) => (
        <Plan key={i} plan={plan} />
      ))}
    </ScrollView>
  );
};

export default Plans;

const styles = StyleSheet.create({
  container: { padding: SPACING.screenPadding },

  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

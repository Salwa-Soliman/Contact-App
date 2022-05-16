import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { PLANS, PRODUCTS } from "../constants/DATA";
import SingleHeader from "../components/single/SingleHeader";
import { useWindowDimensions, StyleSheet } from "react-native";
import PlansList from "./../components/single/PlansList";
import InfoIcon from "../components/ui/InfoIcon";
import Title from "../components/single/Title";
import { SPACING, STYLES } from "../constants/STYLES";
import LoanCalculator from "./../components/single/LoanCalculator";

const SingleProduct = ({ route, navigation }) => {
  const { height } = useWindowDimensions();
  const title = route.params.title;
  const product = PRODUCTS.filter((p) => p.title === title);

  useEffect(() => {
    navigation.setOptions({
      // title: title,
      headerRight: () => <InfoIcon product={product[0]} />,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SingleHeader title={title} screenHeight={height} />
      <View
        style={[
          styles.container,
          STYLES.boxShadow,
          { marginTop: height * -0.05 },
        ]}
      >
        <Title />
        <PlansList title={title} plans={PLANS.slice(0, 4)} />
        <LoanCalculator />
      </View>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal: SPACING.elementMargin,
    padding: SPACING.screenPadding,
    flex: 1,
  },
});

import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { PLANS, PRODUCTS } from "../constants/DATA";
import SingleHeader from "../components/single/SingleHeader";
import { useWindowDimensions } from "react-native";
import PlansList from "./../components/single/PlansList";
import InfoIcon from "../components/ui/InfoIcon";

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
      <PlansList
        title={title}
        screenHeight={height}
        plans={PLANS.slice(0, 3)}
      />
    </View>
  );
};

export default SingleProduct;

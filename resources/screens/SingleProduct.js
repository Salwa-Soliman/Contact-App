import { View } from "react-native";
import React, { useEffect } from "react";
import { PLANS, PRODUCTS } from "../constants/DATA";
import SingleHeader from "../components/single/SingleHeader";
import { useWindowDimensions, StyleSheet } from "react-native";
import PlansList from "./../components/single/PlansList";
import InfoIcon from "../components/ui/InfoIcon";
import Title from "../components/single/Title";
import Content from "../components/single/Content";

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
      <SingleHeader title={title} screenHeight={height} overlay />

      <Content height={height}>
        <Title
          header={"Our Plans:"}
          subTitle={"Tailor made plans that cover all your needs"}
          seeAllLink={"Plans"}
        />
        <PlansList title={title} plans={PLANS.slice(0, 5)} />
      </Content>
    </View>
  );
};

export default SingleProduct;

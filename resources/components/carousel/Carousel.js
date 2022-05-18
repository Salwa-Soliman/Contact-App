import React from "react";
import { View, ScrollView } from "native-base";
import CarouselHeader from "./CarouselHeader";
import List from "../ui/List";

const Carousel = ({
  data,
  headerTitle,
  seeAll,
  logoImage,
  withTitle,
  singleScreen,
}) => {
  return (
    <View mt={5}>
      <CarouselHeader linkTo={seeAll}>{headerTitle}</CarouselHeader>
      <ScrollView horizontal>
        <List
          data={data}
          logoImage={logoImage}
          withTitle={withTitle}
          singleScreen={singleScreen}
        />
      </ScrollView>
    </View>
  );
};

export default Carousel;

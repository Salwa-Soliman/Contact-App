import React from "react";
import { View, ScrollView } from "native-base";
import CarouselHeader from "./CarouselHeader";
import List from "../ui/List";

const Carousel = ({ data, headerTitle, linkTo, logoImage, withTitle }) => {
  return (
    <View mt={5}>
      <CarouselHeader linkTo={linkTo}>{headerTitle}</CarouselHeader>
      <ScrollView horizontal>
        <List data={data} logoImage={logoImage} withTitle={withTitle} />
      </ScrollView>
    </View>
  );
};

export default Carousel;

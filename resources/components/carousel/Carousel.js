import React from "react";
import { ScrollView, Text } from "native-base";
import { View, Heading } from "native-base";
import CarouselHeader from "./CarouselHeader";
import CarouselItem from "./CarouselItem";

const Carousel = ({ data, headerTitle, linkTo }) => {
  return (
    <View mt={5}>
      <CarouselHeader linkTo={linkTo}>{headerTitle}</CarouselHeader>
      <ScrollView horizontal>
        {data.map((item, i) => (
          <CarouselItem key={i} imageSrc={item.image} title={item.title} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Carousel;

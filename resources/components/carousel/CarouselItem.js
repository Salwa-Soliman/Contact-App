import React from "react";
import { Button, Image, View } from "native-base";
import { COLORS, STYLES } from "./../../constants/STYLES";

const CarouselItem = ({ imageSrc, title }) => {
  return (
    <View borderRadius={"2xl"} overflow="hidden" w="150" h="150" mx={2}>
      <Image source={imageSrc} alt="image" style={STYLES.image} />

      <Button
        variant={"outline"}
        position="absolute"
        w="100%"
        h="100%"
        bg="#000a"
        _text={{
          color: COLORS.secondary600,
          fontWeight: "700",
          fontSize: 18,
        }}
        _pressed={{
          _text: {
            color: "transparent",
            // textShadow:
          },
        }}
        colorScheme="transparent"
      >
        {title.toUpperCase()}
      </Button>
    </View>
  );
};

export default CarouselItem;

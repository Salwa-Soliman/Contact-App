import React from "react";
import { Button } from "native-base";
import { COLORS, SPACING, STYLES } from "../../constants/STYLES";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Item = ({ imageSrc, title, index }) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={imageSrc}
      alt="image"
      style={[
        {
          width: 150,
          height: 150,
          resizeMode: "cover",
          borderRadius: 20,
          overflow: "hidden",
          marginHorizontal: title ? 8 : 0,
          marginBottom: title ? 0 : SPACING.elementMargin,
        },
        STYLES.boxShadow,
      ]}
    >
      <Button
        variant={"outline"}
        position="absolute"
        w="100%"
        h="100%"
        bg={title ? "#000a" : "transparent"}
        _text={{
          color: COLORS.secondary600,
          fontWeight: "700",
          fontSize: 18,
        }}
        _pressed={{
          _text: {
            color: "transparent",
          },
        }}
        colorScheme="transparent"
        onPress={() => navigation.navigate("SingleProduct", { index: index })}
      >
        {title && title.toUpperCase()}
      </Button>
    </ImageBackground>
  );
};

export default Item;

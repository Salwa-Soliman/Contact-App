import React from "react";
import { Button } from "native-base";
import { COLORS, SPACING, STYLES } from "../../constants/STYLES";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Item = ({ imageSrc, title, showLogoImage, withTitle }) => {
  const navigation = useNavigation();
  console.log("*-**-*--src", imageSrc);
  return (
    <ImageBackground
      source={imageSrc}
      alt="image"
      style={[
        {
          width: showLogoImage ? 200 : 150,
          height: showLogoImage ? 100 : 150,
          borderRadius: 20,
          overflow: "hidden",
          marginHorizontal: withTitle || showLogoImage ? 8 : 0,
          marginBottom: withTitle || showLogoImage ? 0 : SPACING.elementMargin,
          backgroundColor: COLORS.primary600 + "20",
        },
        !showLogoImage && STYLES.boxShadow,
      ]}
      resizeMode={showLogoImage ? "contain" : "cover"}
    >
      <Button
        variant={"ghost"}
        position="absolute"
        w="100%"
        h="100%"
        borderWidth={showLogoImage ? 2 : 0}
        borderRadius={showLogoImage && "3xl"}
        borderColor="#bbb5"
        bg={withTitle ? COLORS.primary800 + "a0" : "transparent"}
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
        onPress={() => {
          navigation.navigate("SingleProduct", { title: title });
        }}
      >
        {withTitle && title.toUpperCase()}
      </Button>
    </ImageBackground>
  );
};

export default Item;

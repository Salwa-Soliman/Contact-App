import { Text, View } from "react-native";
import React from "react";
import { COLORS, STYLES } from "./../../constants/STYLES";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const CarouselHeader = ({ children, linkTo }) => {
  const navigation = useNavigation();
  return (
    <View style={[STYLES.row, { alignItems: "center" }]}>
      <Text style={STYLES.header}>{children}</Text>
      <Button
        variant="link"
        alignSelf={"center"}
        onPress={() => navigation.navigate(linkTo)}
        _text={{
          color: COLORS.secondary600,
          fontWeight: "600",
        }}
      >
        See All
      </Button>
    </View>
  );
};

export default CarouselHeader;

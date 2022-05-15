import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/STYLES";
import { useNavigation } from "@react-navigation/native";

const InfoIcon = ({ product }) => {
  const navigation = useNavigation();
  // console.log("******", product, "******");
  return (
    <Button
      variant={"ghost"}
      onPress={() => navigation.navigate("Info", { product: product })}
    >
      <Icon
        as={FontAwesome}
        name={"info-circle"}
        size={8}
        color={COLORS.primary800}
      />
    </Button>
  );
};

export default InfoIcon;

const styles = StyleSheet.create({});

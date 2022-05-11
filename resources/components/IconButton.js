import { StyleSheet } from "react-native";
import React from "react";
import { Button, HStack, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ children, icon, size, color, onPress }) => {
  return (
    <Button variant={"link"} onPress={onPress}>
      <HStack alignItems={"flex-end"}>
        <Icon as={Ionicons} name={icon} color={color} size={size} />
        <Text color={color}>{children}</Text>
      </HStack>
    </Button>
  );
};

export default IconButton;

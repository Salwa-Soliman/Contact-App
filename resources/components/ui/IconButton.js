import { StyleSheet } from "react-native";
import React from "react";
import { Button, HStack, Icon, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconButton = ({ children, icon, size, color, onPress, boldText, bg }) => {
  return (
    <Button
      variant={"link"}
      onPress={onPress}
      bg={bg ? bg : "transparent"}
      rounded="full"
    >
      <HStack alignItems={"center"}>
        <Icon
          as={MaterialCommunityIcons}
          name={icon}
          color={color}
          size={size}
          mr={1}
        />
        <Text
          color={color}
          fontWeight={boldText ? "600" : "normal"}
          fontSize={boldText ? 16 : 14}
        >
          {children}
        </Text>
      </HStack>
    </Button>
  );
};

export default IconButton;

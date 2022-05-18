import React from "react";
import {
  Box,
  Text,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/STYLES";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

function Footer({ activeScreen }) {
  const navigation = useNavigation();
  return (
    <Box width="100%" alignSelf="center">
      <HStack
        bg={COLORS.primary800}
        alignItems="center"
        safeAreaBottom
        shadow={6}
        borderTopRadius="32"
      >
        <Pressable
          opacity={activeScreen === "home" ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            navigation.replace("HomePage");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={activeScreen === "home" ? "home" : "home-outline"}
                />
              }
              color={COLORS.secondary600}
              size="lg"
            />
            <Text color={COLORS.secondary600} fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={activeScreen === "Products" ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.replace("Products");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={
                    activeScreen === "Products"
                      ? "briefcase"
                      : "briefcase-outline"
                  }
                />
              }
              color={COLORS.secondary600}
              size="lg"
            />
            <Text color={COLORS.secondary600} fontSize="12">
              Products
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={activeScreen === "Programs" ? 1 : 0.6}
          py="2"
          flex={activeScreen === "Programs" ? 0 : 1}
          onPress={() => {
            navigation.replace("Programs");
          }}
          rounded="full"
          style={activeScreen === "Programs" ? styles.floatingIcon : {}}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={
                    activeScreen === "Programs"
                      ? "business"
                      : "business-outline"
                  }
                />
              }
              color={COLORS.secondary600}
              size="3xl"
            />
            {activeScreen !== "Programs" && (
              <Text color={COLORS.secondary600} fontSize="12">
                Programs
              </Text>
            )}
          </Center>
        </Pressable>
        <Pressable
          opacity={activeScreen === "Wallet" ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.replace("Wallet");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={activeScreen === "Wallet" ? "wallet" : "wallet-outline"}
                />
              }
              color={COLORS.secondary600}
              size="lg"
            />
            <Text color={COLORS.secondary600} fontSize="12">
              Wallet
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={activeScreen === "ContactUs" ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            navigation.replace("ContactUs");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={
                    activeScreen === "ContactUs"
                      ? "chatbubbles"
                      : "chatbubbles-outline"
                  }
                />
              }
              color={COLORS.secondary600}
              size="lg"
            />
            <Text color={COLORS.secondary600} fontSize="12">
              Contact us
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}

export default Footer;

const styles = StyleSheet.create({
  floatingIcon: {
    position: "relative",
    bottom: 35,
    backgroundColor: COLORS.primary800,
    width: 70,
    height: 70,
    borderColor: "#fff",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

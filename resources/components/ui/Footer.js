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

function Footer() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState(1);
  return (
    <Box width="100%" alignSelf="center">
      {/* <Center flex={1}></Center> */}
      <HStack
        bg={COLORS.primary800}
        alignItems="center"
        safeAreaBottom
        shadow={6}
      >
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => {
            setSelected(0);
            navigation.navigate("HomePage");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={<Ionicons name={selected === 0 ? "home" : "home-outline"} />}
              color={COLORS.secondary600}
              size="lg"
            />
            <Text color={COLORS.secondary600} fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            setSelected(1);
            navigation.navigate("Products");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={selected === 1 ? "briefcase" : "briefcase-outline"}
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
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => {
            setSelected(2);
            navigation.navigate("Programs");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={selected === 2 ? "business" : "business-outline"}
                />
              }
              color={COLORS.secondary600}
              size="lg"
            />
            <Text color={COLORS.secondary600} fontSize="12">
              Programs
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            setSelected(3);
            navigation.navigate("Wallet");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons name={selected === 3 ? "wallet" : "wallet-outline"} />
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
          opacity={selected === 4 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => {
            setSelected(4);
            navigation.navigate("ContactUs");
          }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <Ionicons
                  name={selected === 3 ? "chatbubbles-outline" : "chatbubbles"}
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

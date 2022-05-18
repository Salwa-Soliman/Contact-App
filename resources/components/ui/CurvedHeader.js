import { StyleSheet, View, useWindowDimensions, Text } from "react-native";
import React from "react";
import { COLORS, SPACING } from "../../constants/STYLES";
import { Icon, IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const CurvedHeader = ({ screen }) => {
  const { height } = useWindowDimensions();
  const currentScreen = screens[screen];
  console.log(currentScreen.title);
  return (
    <View style={[styles.container, { height: height * 0.2 }]}>
      <View>
        <Text style={styles.welcome}>{currentScreen.title}</Text>
        <Text style={styles.username}>{currentScreen.subTitle}</Text>
      </View>
      <View>
        <IconButton
          icon={<Icon as={Ionicons} name={currentScreen.icon} />}
          borderRadius="full"
          _icon={{
            color: "orange.500",
            size: "3xl",
          }}
          _pressed={{
            bg: "orange.600:alpha.20",
            _icon: {
              name: currentScreen.pressedIcon,
              size: "2xl",
            },
          }}
          onPress={currentScreen.onIconPressed}
        />
      </View>
    </View>
  );
};

export default CurvedHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.primary800,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: SPACING.screenPadding,
    paddingHorizontal: SPACING.screenPadding,
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: -1,
  },
  welcome: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
  },
  username: {
    color: COLORS.secondary600,
  },
  language: {
    color: "#fff",
  },
});

const screens = {
  home: {
    icon: "language-outline",
    pressedIcon: "language",

    title: "Welcome",
    subTitle: "Guest",
    onIconPressed: () => console.log("translation options"),
  },
  programs: {
    icon: "trophy-outline",
    pressedIcon: "trophy",
    title: "Programs",
    subTitle: "To make your life easier",
    onIconPressed: () => console.log("programs"),
  },
  products: {
    icon: "rocket-outline",
    pressedIcon: "rocket",
    title: "Products",
    subTitle: "Shop Now,  Pay Later",
    onIconPressed: () => console.log("Products"),
  },
  wallet: {
    icon: "cash-outline",
    pressedIcon: "cash",
    title: "Wallet",
    subTitle: "Up to 70% cashback",
    onIconPressed: () => console.log("Wallet"),
  },
  contactUs: {
    icon: "chatbubble-ellipses-outline",
    pressedIcon: "chatbubble-ellipses",
    title: "Contact Us",
    subTitle: "We're available 24/7",
    onIconPressed: () => console.log("Contact"),
  },
};

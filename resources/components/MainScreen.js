import React from "react";
import CurvedHeader from "./CurvedHeader";
import { ScrollView, View } from "native-base";
import { SPACING } from "../constants/STYLES";
import { useWindowDimensions } from "react-native";
const MainScreen = ({ children }) => {
  const { height } = useWindowDimensions();

  return (
    <ScrollView flex={1}>
      <CurvedHeader />
      < View p={SPACING.screenPadding} pt={0} mt={height * 0.12}>
        {children}
      </ View>
    </ScrollView>
  );
};

export default MainScreen;

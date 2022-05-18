import React from "react";
import CurvedHeader from "./CurvedHeader";
import { ScrollView, View } from "native-base";
import { useWindowDimensions } from "react-native";
import { SPACING } from "../../constants/STYLES";
import SingleHeader from "../single/SingleHeader";

const MainScreen = ({ children, curvedHeader, screen }) => {
  const { height } = useWindowDimensions();

  return (
    <ScrollView flex={1}>
      {curvedHeader && <CurvedHeader screen={screen} />}
      <View p={SPACING.screenPadding} pt={0} mt={height * -0.03}>
        {children}
      </View>
    </ScrollView>
  );
};

export default MainScreen;

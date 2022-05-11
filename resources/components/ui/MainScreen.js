import React from "react";
import CurvedHeader from "./CurvedHeader";
import { ScrollView, View } from "native-base";
// import { SPACING } from "../../constants/STYLES";
import { useWindowDimensions } from "react-native";
import { SPACING } from "../../constants/STYLES";

const MainScreen = ({ children }) => {
  const { height } = useWindowDimensions();

  return (
    <ScrollView flex={1}>
      <CurvedHeader />
      <View p={SPACING.screenPadding} pt={0} mt={height * 0.12}>
        {children}
      </View>
    </ScrollView>
  );
};

export default MainScreen;
// import { View, Text } from "react-native";
// import React from "react";

// const MainScreen = ({ children }) => {
//   return (
//     <View>
//       <Text>{children}</Text>
//     </View>
//   );
// };

// export default MainScreen;

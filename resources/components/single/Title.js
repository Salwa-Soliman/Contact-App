import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING, STYLES } from "../../constants/STYLES";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Title = ({
  header,
  subTitle,
  seeAllLink,
  singleProgram,
  // headerColor,
  // subColor,
  // centered,
}) => {
  const navigation = useNavigation();

  const headerExtraStyle = singleProgram
    ? { color: COLORS.textColor, fontSize: 22 }
    : { color: COLORS.primary800 };
  const subTitleExtraStyle = singleProgram
    ? { color: COLORS.secondary600, textAlign: "center", fontSize: 14 }
    : { color: COLORS.textColor };
  return (
    <View style={styles.container}>
      <View
        style={[
          STYLES.row,
          {
            alignItems: "center",
            justifyContent: singleProgram ? "center" : "space-between",
          },
        ]}
      >
        <Text style={[styles.header, headerExtraStyle]}>{header}</Text>
        {seeAllLink && (
          <Button
            variant={"link"}
            _text={{ color: COLORS.secondary600, fontWeight: "600" }}
            onPress={() => navigation.navigate(seeAllLink)}
          >
            See All
          </Button>
        )}
      </View>
      <Text style={[styles.subText, subTitleExtraStyle]}>{subTitle}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.elementMargin,
  },
  header: {
    fontSize: 20,
    // color: COLORS.primary800,
    fontWeight: "600",
  },
  subText: {
    // color: COLORS.textColor,
    fontSize: 12,
  },
});

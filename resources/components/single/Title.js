import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SPACING, STYLES } from "../../constants/STYLES";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Title = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[STYLES.row, { alignItems: "center" }]}>
        <Text style={styles.header}>Our Plans:</Text>
        <Button
          variant={"link"}
          _text={{ color: COLORS.secondary600, fontWeight: "600" }}
          onPress={() => navigation.navigate("Plans")}
        >
          See All
        </Button>
      </View>
      <Text style={styles.subText}>
        Tailor made plans that cover all your needs
      </Text>
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
    color: COLORS.primary800,
    fontWeight: "600",
  },
  subText: {
    color: COLORS.textColor,
    fontSize: 12,
  },
});

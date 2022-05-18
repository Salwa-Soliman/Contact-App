import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "./../../constants/STYLES";
import { HStack } from "native-base";

const PlanDetails = ({ details }) => {
  return (
    <View style={styles.container}>
      {details.map((item, i) => {
        return (
          <Text key={i} style={styles.text}>
            - {item.colored + item.text}
          </Text>
          //   <HStack>
          //     <Text style={styles.yellowText}>{item.colored}</Text>
          //     <Text style={styles.text}>{item.text}</Text>
          //   </HStack>
        );
      })}
    </View>
  );
};

export default PlanDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary500 + "40",
    borderRadius: 5,
    padding: 10,
    marginBottom: 8,
    marginTop: -5,
    width: "90%",
    alignSelf: "center",
  },
  yellowText: {
    color: COLORS.secondary600,
    // fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.textColor,
  },
});

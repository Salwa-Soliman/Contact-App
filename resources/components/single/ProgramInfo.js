import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/STYLES";
import { HStack } from "native-base";

const ProgramInfo = ({ data }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
      {Object.keys(data).map((item, i) => (
        <View key={i}>
          <Text style={styles.header}>{item}</Text>
          <View style={styles.nestedContainer}>
            {data[item].map((nestedData, i) => (
              <HStack key={i}>
                <Text style={styles.star}>* </Text>
                <Text style={styles.nestedData}>{nestedData}</Text>
              </HStack>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProgramInfo;

const styles = StyleSheet.create({
  header: {
    fontSize: 16,
    backgroundColor: COLORS.secondary600,
    color: COLORS.primary800,
    fontWeight: "500",
    padding: 10,
    borderRadius: 10,
  },
  nestedContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  star: {
    // fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary800,
    padding: 5,
  },
  nestedData: {
    color: COLORS.textColor,
    paddingVertical: 5,
  },
});

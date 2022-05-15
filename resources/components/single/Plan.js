import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "native-base";
import { COLORS } from "../../constants/STYLES";
import IconButton from "../ui/IconButton";
import PlanDetails from "./PlanDetails";

const Plan = ({ plan }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View>
      <Button
        borderRadius={"xl"}
        bg={COLORS.primary800 + "20"}
        _text={{
          color: COLORS.primary800,
          fontWeight: "600",
        }}
        _pressed={{
          _text: {
            color: "#fff",
          },
        }}
        colorScheme={"darkBlue"}
        my="2"
        onPress={() => setShowDetails(!showDetails)}
      >
        {plan.name}
      </Button>
      {showDetails && <PlanDetails details={plan.description} />}
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    alignSelf: "center",
  },
  text: {
    color: COLORS.primary800,
    fontWeight: "600",
  },
});

import { View } from "native-base";
import React, { useState } from "react";
import { COLORS } from "../../constants/STYLES";
import IconButton from "../ui/IconButton";
import LoanModal from "./LoanModal";

const LoanCalculator = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View mt="2">
      <IconButton
        size="7"
        icon={"calculator-variant"}
        onPress={() => setShowModal(true)}
        boldText
        bg={"primary.600"}
        color="#fff"
      >
        Loan Calculator
      </IconButton>

      {showModal && (
        <LoanModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </View>
  );
};

export default LoanCalculator;

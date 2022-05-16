import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Box,
  Center,
  Select,
  WarningOutlineIcon,
} from "native-base";
import { useState, useRef } from "react";
import { COLORS } from "../../constants/STYLES";
import IconButton from "../ui/IconButton";
import DropDownList from "../ui/DropDownList";
import { MONTHS, PLANS } from "../../constants/DATA";

const LoanCalculator = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  // const carValueRef = useRef("");
  // const downPaymentRef = useRef("");
  const [carValue, setCarValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [validators, setValidators] = useState({
    plan: false,
    months: false,
    carValue: false,
    downPayment: false,
  });
  return (
    <>
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

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        bg={COLORS.primary800 + "40"}
      >
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header
            _text={{
              color: COLORS.primary800,
            }}
          >
            Loan Calculator
          </Modal.Header>
          <Modal.Body>
            <Center>
              <Box w="3/4" maxW="300">
                {/* Select Plan  */}
                <DropDownList
                  placeholder={"Select Plan"}
                  data={PLANS.map((plan) => plan.name)}
                  setSelectedItem={setSelectedPlan}
                  selectedItem={selectedPlan}
                  isInvalid={validators.plan}
                />
                {/* Months  */}
                <DropDownList
                  placeholder={"Months"}
                  data={MONTHS}
                  setSelectedItem={setSelectedMonth}
                  selectedItem={selectedMonth}
                  isInvalid={validators.months}
                />
                {/* Car Value  */}
                <FormControl mb={3} isRequired isInvalid={validators.carValue}>
                  <Input
                    placeholder="Enter Car Value"
                    value={carValue}
                    onChangeText={(val) => setCarValue(val)}
                    keyboardType={"number-pad"}
                  />
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}
                  >
                    Please Enter the car value!
                  </FormControl.ErrorMessage>
                </FormControl>
                {/* Down Payment  */}
                <FormControl
                  mb={3}
                  isRequired
                  isInvalid={validators.downPayment}
                >
                  <Input
                    placeholder="Down Payment"
                    // ref={downPaymentRef}
                    value={downPayment}
                    onChangeText={(val) => setDownPayment(val)}
                    keyboardType={"number-pad"}
                  />

                  <FormControl.ErrorMessage
                    leftIcon={
                      <WarningOutlineIcon
                        size="xs"
                        alignSelf={"flex-start"}
                        pt="5"
                      />
                    }
                  >
                    At least 20% of car value.{"\n"} 60% maximum.
                  </FormControl.ErrorMessage>
                </FormControl>
                {/* car  */}
                <FormControl mb={3} isRequired isInvalid={validators.carValue}>
                  <Input
                    placeholder="car"
                    // ref={downPaymentRef}
                    value={carValue}
                    onChangeText={(val) => setCarValue(val)}
                    keyboardType={"number-pad"}
                  />

                  <FormControl.ErrorMessage
                    leftIcon={
                      <WarningOutlineIcon
                        size="xs"
                        alignSelf={"flex-start"}
                        pt="5"
                      />
                    }
                  >
                    car.
                  </FormControl.ErrorMessage>
                </FormControl>
              </Box>
            </Center>
          </Modal.Body>
          <Modal.Footer justifyContent="space-around">
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              rounded={"full"}
              w={85}
              colorScheme={"danger"}
            >
              Cancel
            </Button>
            <Button
              onPress={calculate}
              rounded={"full"}
              w={85}
              colorScheme={"success"}
            >
              Calculate
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );

  function calculate() {
    if (!selectedPlan) {
      setValidators({ ...validators, plan: true });
    } else {
      setValidators({ ...validators, plan: false });
    }

    if (!selectedMonth) {
      setValidators({ ...validators, months: true });
    }

    if (carValue < 100000 || carValue > 3000000) {
      setValidators({ ...validators, carValue: false });
      console.log("true", carValue < 100000);
    } else {
      setValidators({ ...validators, carValue: true });
      console.log("3ady");
    }

    if (downPayment < 0.2 * carValue || downPayment > 0.6 * carValue) {
      setValidators({ ...validators, downPayment: true });
    } else {
      setValidators({ ...validators, downPayment: false });
    }
  }
};

export default LoanCalculator;

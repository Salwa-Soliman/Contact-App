import React, { useState } from "react";
import {
  FormControl,
  WarningOutlineIcon,
  Button,
  Modal,
  Input,
  Box,
  Center,
  View,
  Text,
} from "native-base";
import { COLORS } from "../../constants/STYLES";
import DropDownList from "../ui/DropDownList";
import { MONTHS, PLANS } from "../../constants/DATA";

const LoanModal = ({ showModal, setShowModal }) => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [carValue, setCarValue] = useState("");
  const [downPayment, setDownPayment] = useState("");

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      bg={COLORS.primary800 + "40"}
    >
      <Modal.Content maxWidth="400px" borderRadius="3xl" p={3}>
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
              />
              {/* Months  */}
              <DropDownList
                placeholder={"Months"}
                data={MONTHS}
                setSelectedItem={setSelectedMonth}
                selectedItem={selectedMonth}
              />
              {/* Car Value  */}
              <Input
                placeholder="Enter Car Value"
                value={carValue}
                onChangeText={(val) => setCarValue(val)}
                keyboardType={"number-pad"}
                mb={3}
              />
              {/* Down Payment  */}
              <FormControl
                mb={3}
                isInvalid={
                  downPayment < carValue * 0.2 ||
                  (carValue && downPayment > carValue * 0.6)
                }
              >
                <Input
                  placeholder="Down Payment"
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
                  {downPayment < carValue * 0.2 ? "Minimum" : "Maximum"} Down
                  Payment is {downPayment < carValue * 0.2 ? 20 : 60}% of Car
                  Value.
                </FormControl.ErrorMessage>
              </FormControl>

              {/* Calculated Installement /month  */}
              {selectedPlan && selectedMonth && carValue > downPayment && (
                <View
                  p={4}
                  alignSelf="center"
                  borderStyle={"dashed"}
                  borderWidth={2}
                  minW="80%"
                  borderRadius={"2xl"}
                  flexDir="row"
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <Text
                    color={COLORS.secondary600}
                    fontWeight={"bold"}
                    fontSize={20}
                  >
                    {((carValue - downPayment) * 1.8) / parseInt(selectedMonth)}{" "}
                  </Text>
                  <Text color={COLORS.primary800}>/ month</Text>
                </View>
              )}
            </Box>
          </Center>
        </Modal.Body>

        <Modal.Footer justifyContent="space-around">
          <Button
            onPress={() => {
              setShowModal(false);
            }}
            borderRadius="2xl"
            px={6}
            // colorScheme={"danger"}
            bg={COLORS.primary800}
            _text={{
              color: COLORS.secondary600,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );

  function calculate() {
    console.log("carValue");
  }
};

export default LoanModal;

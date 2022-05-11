import React from "react";
import { VStack } from "native-base";
import CustomBox from "./CustomBox";
import { SPACING } from "../../constants/STYLES";

const BoxesList = ({ data }) => {
  return (
    <VStack space={5}>
      {data.map((box, i) => (
        <CustomBox
          key={i}
          header={box.header}
          description={box.description}
          dark={box.dark}
        />
      ))}
    </VStack>
  );
};

export default BoxesList;

import { View, Text } from "native-base";
import React from "react";
import SingleHeader from "../components/single/SingleHeader";
import { useWindowDimensions } from "react-native";
import Content from "./../components/single/Content";
import Title from "../components/single/Title";
import { PROGRAMS } from "../constants/DATA";
import { COLORS } from "../constants/STYLES";
import ProgramInfo from "../components/single/ProgramInfo";
const SingleProgram = ({ route }) => {
  const title = route.params.title;
  const { height } = useWindowDimensions();
  const program = PROGRAMS.filter((program) => program.title === title)[0];

  return (
    <View flex={1}>
      <SingleHeader title={title} screenHeight={height} programScreen />
      <Content height={height}>
        <Title
          header={"Contact " + program.title}
          subTitle={program.subTitle}
          singleProgram
        />
        <ProgramInfo data={program.singleScreenContent} />
      </Content>
    </View>
  );
};

export default SingleProgram;

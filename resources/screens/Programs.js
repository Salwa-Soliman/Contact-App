import React from "react";
import List from "../components/ui/List";
import MainScreen from "./../components/ui/MainScreen";
import { PROGRAMS } from "../constants/DATA";
const Programs = () => {
  return (
    <MainScreen curvedHeader>
      <List data={PROGRAMS} />
    </MainScreen>
  );
};

export default Programs;

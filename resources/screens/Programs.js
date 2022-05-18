import React from "react";
import List from "../components/ui/List";
import MainScreen from "./../components/ui/MainScreen";
import { PROGRAMS } from "../constants/DATA";
import Footer from "../components/ui/Footer";
const Programs = () => {
  return (
    <>
      <MainScreen curvedHeader>
        <List data={PROGRAMS} singleScreen={"SingleProgram"} />
      </MainScreen>
      <Footer activeScreen={"Programs"} />
    </>
  );
};

export default Programs;

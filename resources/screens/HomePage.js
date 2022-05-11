import React from "react";
import MainScreen from "../components/ui/MainScreen";
import BoxesList from "../components/text-box/BoxesList";
import Carousel from "./../components/carousel/Carousel";
import { BOXES, PRODUCTS, PROGRAMS } from "../constants/DATA";

const HomePage = () => {
  return (
    <MainScreen>
      <BoxesList data={BOXES} />
      <Carousel
        data={PRODUCTS.slice(0, 4)}
        headerTitle={"Our Products"}
        linkTo={"Products"}
      />
      <Carousel
        data={PROGRAMS.slice(0, 4)}
        headerTitle={"Our Programs"}
        linkTo={"Programs"}
      />
    </MainScreen>
  );
};

export default HomePage;

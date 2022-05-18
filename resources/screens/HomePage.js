import React from "react";
import MainScreen from "../components/ui/MainScreen";
import BoxesList from "../components/text-box/BoxesList";
import Carousel from "./../components/carousel/Carousel";
import { BOXES, PRODUCTS, PROGRAMS } from "../constants/DATA";
import Footer from "../components/ui/Footer";

const HomePage = () => {
  return (
    <>
      <MainScreen curvedHeader screen={"home"}>
        <BoxesList data={BOXES} />
        <Carousel
          data={PRODUCTS.slice(0, 4)}
          headerTitle={"Our Products"}
          seeAll={"Products"}
          singleScreen={"SingleProduct"}
          logoImage
        />
        <Carousel
          data={PROGRAMS.slice(0, 4)}
          headerTitle={"Our Programs"}
          seeAll={"Programs"}
          singleScreen={"SingleProgram"}
          withTitle
        />
      </MainScreen>
      <Footer activeScreen="home" />
    </>
  );
};

export default HomePage;

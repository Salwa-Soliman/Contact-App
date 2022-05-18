import React from "react";
import { PRODUCTS } from "../constants/DATA";
import MainScreen from "./../components/ui/MainScreen";
import List from "../components/ui/List";
import Footer from "../components/ui/Footer";

const Products = () => {
  return (
    <>
      <MainScreen curvedHeader>
        <List data={PRODUCTS} singleScreen={"SingleProduct"} />
      </MainScreen>
      <Footer activeScreen="Products" />
    </>
  );
};

export default Products;

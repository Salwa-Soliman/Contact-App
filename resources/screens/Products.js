import React from "react";
import { PRODUCTS } from "../constants/DATA";
import MainScreen from "./../components/ui/MainScreen";
import List from "../components/ui/List";

const Products = () => {
  return (
    <MainScreen curvedHeader>
      <List data={PRODUCTS} />
    </MainScreen>
  );
};

export default Products;

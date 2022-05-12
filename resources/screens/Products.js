// import { View, Text } from "react-native";
import React from "react";
import { PRODUCTS } from "../constants/DATA";
// import Item from "../components/ui/Item";
import MainScreen from "./../components/ui/MainScreen";
import List from "../components/ui/List";

const Products = () => {
  return (
    <MainScreen>
      <List data={PRODUCTS} />
    </MainScreen>
  );
};

export default Products;

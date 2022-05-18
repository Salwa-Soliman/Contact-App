import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../components/ui/Footer";

const Wallet = () => {
  return (
    <>
      <View>
        <Text>Wallet</Text>
      </View>
      <Footer activeScreen={"Wallet"} />
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({});

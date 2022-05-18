import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Footer from "../components/ui/Footer";
import MainScreen from "../components/ui/MainScreen";

const ContactUs = () => {
  return (
    <>
      <MainScreen curvedHeader screen={"contactUs"}></MainScreen>

      <Footer activeScreen={"ContactUs"} />
    </>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});

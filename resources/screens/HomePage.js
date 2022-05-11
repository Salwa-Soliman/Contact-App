import { View, Text } from "react-native";
import React from "react";
import CurvedHeader from "../components/CurvedHeader";
import CustomBox from "../components/CustomBox";
import MainScreen from "../components/MainScreen";
import BoxesList from "../components/BoxesList";

const HomePage = () => {
  const boxesData = [
    {
      header: "",
      description:
        "Contact Mobile App is a world of unlimited benifits, that cover all your financing and shopping needs through a carefully selected partners network from the beggest brands in the Egyptian market including electronics, fashion, and manyy more.",
      dark: false,
    },
    {
      header: "About Contact",
      description:
        "Established in 2001, Contact was the first specialized consumer finance company in Egypt. Set-up as an independent, management, and employee-led initiative, the company has managed to secure equity financing from various sources since its inception, including banks, private equity firms, and individuals.",
      dark: false,
    },
    {
      header: "Loyalty Points",
      description:
        "To redeem your rewards points, please click on the below links to know more.",
      dark: true,
    },
  ];
  return (
    <MainScreen>
      <BoxesList data={boxesData} />
    </MainScreen>
  );
};

export default HomePage;

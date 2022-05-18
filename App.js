// In App.js in a new project

import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";

import HomePage from "./resources/screens/HomePage";
import Landing from "./resources/screens/Landing";
import { COLORS } from "./resources/constants/STYLES";
import Products from "./resources/screens/Products";
import Programs from "./resources/screens/Programs";
import TermsAndConditions from "./resources/screens/TermsAndConditions";
import Redeem from "./resources/screens/Redeem";
import SingleProduct from "./resources/screens/SingleProduct";
import SingleProgram from "./resources/screens/SingleProgram";
import CurvedHeader from "./resources/components/ui/CurvedHeader";
import Plans from "./resources/screens/Plans";
import Info from "./resources/screens/Info";
import Footer from "./resources/components/ui/Footer";
import Wallet from "./resources/screens/Wallet";
import ContactUs from "./resources/screens/ContactUs";
import Whatsapp from "./resources/components/ui/Whatsapp";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={COLORS.primary800}
      />
      <Box flex={1}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: COLORS.primary800,
              headerTransparent: true,
              title: "",
            }}
          >
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="Programs" component={Programs} />
            <Stack.Screen
              name="TermsAndConditions"
              component={TermsAndConditions}
            />
            <Stack.Screen name="Redeem" component={Redeem} />
            <Stack.Screen name="SingleProduct" component={SingleProduct} />
            <Stack.Screen name="SingleProgram" component={SingleProgram} />
            <Stack.Screen name="Plans" component={Plans} />
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
          </Stack.Navigator>
          {/* <Footer /> */}
          {/* <Whatsapp /> */}
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}

export default App;

// In App.js in a new project

import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";

import HomePage from "./resources/screens/HomePage";
import Landing from "./resources/screens/Landing";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        showHideTransition="slide"
        animated={true}
        barStyle="light-content"
      />
      <Box flex={1}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="Landing" component={Landing} />
          </Stack.Navigator>
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}

export default App;

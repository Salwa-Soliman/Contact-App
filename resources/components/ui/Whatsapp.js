import { Fab, Icon, Box, Center, Link } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Whatsapp = () => {
  return (
    <Center>
      <Box w="100%" shadow="2" rounded="full">
        <Fab
          renderInPortal={false}
          shadow={4}
          p={0}
          size="sm"
          mb={20}
          bg={"#0f0"}
          icon={
            <Link href="https://wa.me/01069908891">
              <Icon
                color="white"
                as={Ionicons}
                name="logo-whatsapp"
                bg={"#0f0"}
                size="10"
                p={0}
              />
            </Link>
          }
        />
      </Box>
    </Center>
  );
};

export default Whatsapp;

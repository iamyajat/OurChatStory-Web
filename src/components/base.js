import { React, useState } from "react";
import { Heading, Box, Text, Stack } from "@chakra-ui/react";
import Dashboard from "./dashboard-story";
import Uploader from "./upload";
import img from "../static/bg2.png";
const Base = () => {
  const [showRes, setShowRes] = useState(false);
  const [data, setData] = useState({});

  return showRes ? (
    <Dashboard drawData={data} />
  ) : (
    <Box
      p="1.5rem"
      w="100%"
      h="100vh"
      bgImage={img}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="120%"
    >
      <Heading mb="2rem" fontFamily="fantasy" colorScheme="blue" size="3xl">
        WhatsApp Wrapped '21
      </Heading>

      <Box m={["0.2rem", "1rem"]} boxShadow="2xl" bg="white" p="5" rounded="md">
        <Uploader setShowRes={setShowRes} setData={setData} />
      </Box>
    </Box>
  );
};

export default Base;

import { Box, Text, Flex, Spacer, VStack, Heading, keyframes } from "@chakra-ui/react";
import React, { useState } from "react";

import { VictoryBar, VictoryStack, VictoryPie, VictoryLabel } from "victory";

const ZoomAnimation = keyframes`
    0% {
    background-size: 100% 100%;
  }
  50%{
    background-size: 150% 150%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const RotateAnimation = keyframes`
    0% {
    transform: rotate(-5deg);
  }
  50%{
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
`;


const Card4 = ({ drawData }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;
  const rotateAnimation = `${RotateAnimation} 15s ease-out infinite;`;

  const [piRadii, setPiRadii] = useState(0);
  return (
    <VStack
      spacing="0.5rem"
      align="center"
      justify="top"
      bgImage="/static/dark/v2bg9.jpg"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="1rem"
      // width="100vw"
      // h="100vh"
      w="100%"
      h="78vh"
      bgColor="#5138C2"
      border="2px solid orange"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
      animation={zoomAnimation}
    >
      <Heading mt="4rem" fontSize="3xl" textAlign="center" fontWeight="bold">
        Who texts the most?
      </Heading>
      <Text
        pl="1rem"
        pr="1rem"
        backgroundColor="orange"
        fontSize="4xl"
        textAlign="center"
        color="white"
        fontWeight="bold"
      >
        {drawData.most_active_member.member}
      </Text>
      <Box align="center" width="100%" height="65%"
        animation={rotateAnimation}
      >
        <VictoryPie
          height="300"
          innerRadius={70}
          animate={{
            duration: 3000,
            onLoad: { duration: 1000 },
          }}
          // animation={rotateAnimation}
          colorScale={[
            "tomato",
            "orange",
            "gold",
            "cyan",
            "navy",
            "pink",
            "green",
          ]}
          data={drawData.no_of_messages_per_member
            .slice(0, 6)
            .map(({ member, count }) => {
              return { x: member.split(" ")[0], y: count };
            })}
          labelComponent={
            <VictoryLabel
              style={[{fill: "white"}]}
              // backgroundStyle={[{ fill: "white" }]}
              // backgroundPadding={{ left: 5, right: 5 }}
            />
          }
        />
      </Box>
    </VStack>
  );
};

export default Card4;

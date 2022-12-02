import {
  Box,
  Center,
  HStack,
  keyframes,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
const sample_data = require("../data/sample-response");

import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { HiArrowCircleUp, HiArrowUp } from "react-icons/hi";
// import "../styles/style.css";
// import useScrollSnap from 'react-use-scroll-snap';
import MonthlyGraph from "./charts/monthly";
import Card0 from "./charts/Welcome2";
import GCard0 from "./charts/g-Welcome2";
import Card1 from "./charts/TotalChat";
import WordCloud from "./charts/wordcloud";
import CountPie from "./charts/CountPie";
import Card5 from "./charts/emoji";
import HourlyGraph from "./charts/time";
import NoTalk from "./charts/cold";
import Card9 from "./charts/MostActive";
import DummyIntro from "./charts/dummy_intro";

import ThankYou from "./charts/ThankCard";
import Welcome from "./charts/Welcome";
import Story from "./Story";
import { ST } from "next/dist/shared/lib/utils";
const moveUp = keyframes`
    from {transform: translateY(0px);}
    to {transform: translateY(-10px);}
`;

const Intro = () => {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 1, delay: 1 });
  const moveUpAnimation = `${moveUp} infinite 1s ease-in-out alternate`;
  const dummy_data = sample_data.sample;

  const dummyIntro = <DummyIntro drawData={sample_data.sample} />;
  const noTalk = <NoTalk drawData={dummy_data} />;

  return (
    <>
      {/* <section ref={scrollRef}> */}
      {/* <section className='hello'>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#00002b"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#1a0010"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#120000"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>

                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        bgColor="#00002b"
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    ></Box>

                </Box>
                <Box
                    p="0.5rem"
                    align="center"
                >

                    <Box
                        borderRadius="1rem"
                        p="1rem"
                        w={{ base: "100%", sm: "100%", lg: "80%" }}
                        h="90vh"
                    >

                        <Center
                            h="100%"
                            w="100%"
                        >

                            <Text
                                fontSize="7xl"
                                color="white"
                                w={"100%"}
                                fontWeight="600"
                                align={"center"}
                            >
                                Thank You
                            </Text>
                        </Center>

                    </Box>
                </Box>



            </section> */}

      <section className="snap-container">
        <h1 className="snap-child">
          <Box>
            <Box bgColor={"#9b1fe8"}>
              <Marquee
                gradient={true}
                speed={40}
                gradientColor={[155, 31, 232]}
                gradientWidth={30}
                pauseOnHover={true}
              >
                {[...Array(10)].map((i) => (
                  <Text
                    key={i}
                    as="span"
                    fontSize={{ base: "2xl", md: "2xl", sm: "2xl", lg: "xl" }}
                    fontWeight="bold"
                    color="white"
                    m="0.5rem"
                  >
                    #WhatsAppWrapped
                  </Text>
                ))}
              </Marquee>
            </Box>

            <VStack
              ml={{ base: "1.5rem", sm: "1.5rem", lg: "2rem" }}
              mr={{ base: "1.5rem", sm: "1.5rem", lg: "2rem" }}
              mt={{ base: "0.5rem", sm: "0.5rem", lg: "0.5rem" }}
              mb={{ base: "1rem", sm: "1rem", lg: "1rem" }}
              align={"center"}
              spacing={{ base: "1rem", sm: "1rem", lg: "1rem" }}
              h="75vh"
            >
              <Spacer />

              <VStack spacing="-1.5rem" align={"start"}>
                <Text
                  fontSize="6xl"
                  color="primary.200"
                  w={"100%"}
                  fontWeight="600"
                >
                  Welcome
                </Text>
                <Text
                  fontSize="5xl"
                  color="primary.200"
                  w={"100%"}
                  fontWeight="600"
                  align={"end"}
                  pr="2rem"
                >
                  to the
                </Text>
                <Text
                  fontSize="5xl"
                  color="#48937e"
                  w={"100%"}
                  fontWeight="600"
                  pl={"1rem"}
                >
                  end of a
                </Text>
                <Text
                  fontSize="5xl"
                  color="#48937e"
                  pr={"0rem"}
                  w={"100%"}
                  fontWeight="600"
                  align={"end"}
                >
                  great year.
                </Text>

                <Text
                  fontSize="6xl"
                  color="white"
                  pt={"1rem"}
                  w={"100%"}
                  fontWeight="600"
                  align={"start"}
                >
                  Ready for
                </Text>
                <HStack
                  align={"start"}
                  spacing="1.5rem"
                  w={"100%"}
                  pl={"0.5rem"}
                >
                  <Text
                    fontSize="5xl"
                    color="white"
                    pt={"0.5rem"}
                    w={"100%"}
                    fontWeight="600"
                    align={"end"}
                  >
                    your
                  </Text>
                  <Text
                    fontSize="6xl"
                    color="#dc3ca1"
                    w={"100%"}
                    fontWeight="600"
                    align={"start"}
                  >
                    2022
                  </Text>
                </HStack>

                <Text
                  fontSize="6xl"
                  color="#dc3ca1"
                  w={"100%"}
                  fontWeight="600"
                  align={"start"}
                >
                  Wrapped?
                </Text>
              </VStack>

              <VStack
                spacing="0.25rem"
                w={"100%"}
                // pt="2.5rem"
                align={"center"}
                animation={moveUpAnimation}
              >
                <Box align={"center"} borderRadius={"full"}>
                  <HiArrowUp size="1rem" color="yellow" align={"center"} />

                  <Text
                    fontSize="md"
                    color="yellow.200"
                    w={"100%"}
                    fontWeight="400"
                    align={"center"}
                  >
                    scroll to see more
                  </Text>
                </Box>
              </VStack>
              <Spacer />
            </VStack>
          </Box>
        </h1>
        <Story component={dummyIntro} />
        <Story component={noTalk} />
        {/* <div className="d-flex snap-child">
          <Box
            ml={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mr={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mt={{ base: "0.5rem", sm: "0.5rem", lg: "0.5rem" }}
            mb={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            align={"center"}
            spacing={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            h="78vh"
            minWidth={{lg: "600"}}
            maxWidth="600"
          >
            <Box
              bgColor="#48937e"
              borderRadius="1rem"
              p="1rem"
              w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              h="78vh"
            >
              <DummyIntro drawData={dummy_data} />
            </Box>
          </Box>
        </div>

        <div className="d-flex snap-child">
          <Box
            ml={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mr={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mt={{ base: "0.5rem", sm: "0.5rem", lg: "0.5rem" }}
            mb={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            align={"center"}
            spacing={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            h="78vh"
            minWidth="600"
            maxWidth="600"
          >
            <Box
              bgColor="green"
              borderRadius="1rem"
              p="1rem"
              w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              h="78vh"
            >
              <NoTalk drawData={dummy_data} />
            </Box>
          </Box>
        </div>
        <div className="d-flex snap-child">
          <Box
            ml={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mr={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mt={{ base: "0.5rem", sm: "0.5rem", lg: "0.5rem" }}
            mb={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            align={"center"}
            spacing={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            h="78vh"
            minWidth="600"
            maxWidth="600"
          >
            <Box
              bgColor="brown"
              borderRadius="1rem"
              p="1rem"
              w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              h="78vh"
            >
              <HourlyGraph drawData={dummy_data} />
            </Box>
          </Box>
        </div>
        <div className="d-flex snap-child">
          <Box
            ml={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mr={{ base: "2rem", sm: "2rem", lg: "4.5rem" }}
            mt={{ base: "0.5rem", sm: "0.5rem", lg: "0.5rem" }}
            mb={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            align={"center"}
            spacing={{ base: "1rem", sm: "1rem", lg: "1rem" }}
            h="78vh"
            minWidth="600"
            maxWidth="600"
          >
            <Box
              bgColor="white"
              borderRadius="1rem"
              p="1rem"
              w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
              h="78vh"
            >
              <WordCloud drawData={dummy_data} />
            </Box>
          </Box>
        </div> */}

        <style jsx>{`
          .snap-container {
            width: calc(100vw - (100vw - 100%));
            height: 90vh;
            text-align: center;
            scroll-snap-type: y mandatory;
            scroll-padding: 10px;
            overflow-y: scroll;
          }

          .d-flex {
            display: flex;
          }
          .snap-child {
            height: 80vh;
            scroll-snap-align: center;
            // display: flex;
            justify-content: center;
            align-items: center;
            background: #000;
            color: #fff;
          }
        `}</style>
      </section>
    </>
  );
};

export default Intro;
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import Chart from "./Chart";
import Navbar from "./Navbar";

function Review() {
  return (
    <Box>
      <Navbar />
      <Flex mt="3rem" justify="center">
        <Box borderRadius="md" p="2rem" w="70%" border="1px solid black">
          <HStack align="top">
            <Text fontSize="1.2rem" fontWeight="700">
              Review:
            </Text>
            <Text>
              WOW TRIP! Some of the highlighting things of the trip are the
              visit the spring water temple, Balinese coffee plantation and the
              rice plantation, our last day included visiting the local villages
              and this showed the living style of the Bali people. If you use
              the best company for the tour then I am sure that the trip will be
              a memorable one. Overall I can say that this was an inexpensive
              and worthy trip. What is worthy to talk is the scenic view of Bali
              rice fields that are more than amazing! Thumbs up to my organizers
              for delivering such service!
            </Text>
          </HStack>

          <HStack m="3rem" justify="center">
            <Box boxShadow="base" p="4" borderRadius="md">
              <Text fontSize="1.5rem" fontWeight="700">
                User Rating
              </Text>
              <Text fontSize="1.1rem">4 / 5</Text>
            </Box>
            <Box boxShadow="base" p="4" borderRadius="md">
              <Text fontSize="1.5rem" fontWeight="700">
                Predicted Rating
              </Text>
              <Text fontSize="1.1rem">4 / 5</Text>
            </Box>
          </HStack>
          <hr style={{ marginBottom: "1rem" }} />
          <Chart label="review" labels={["jan", "feb"]} chartData={[12, 5]} />
        </Box>
      </Flex>
    </Box>
  );
}

export default Review;

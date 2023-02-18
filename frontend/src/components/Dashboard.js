import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import Chart from "./Chart";
import Navbar from "./Navbar";

function Dashboard() {
  const reviews = ["fdasf", "fdsaf"];
  return (
    <Box>
      <Navbar />
      <Flex mx="10rem" direction="column" h="100%">
        <Box mt="2rem">
          <HStack mb="1rem">
            <Box boxShadow="base" p="4" borderRadius="md">
              <Text fontSize="1.5rem" fontWeight="700">
                Total Reviews
              </Text>
              <Text fontSize="1.1rem">4 / 5</Text>
            </Box>
            <Box boxShadow="base" p="4" borderRadius="md">
              <Text fontSize="1.5rem" fontWeight="700">
                Average Reviews
              </Text>
              <Text fontSize="1.1rem">4 / 5</Text>
            </Box>
            <Box boxShadow="base" p="4" borderRadius="md">
              <Text fontSize="1.5rem" fontWeight="700">
                Predicted Reviews
              </Text>
              <Text fontSize="1.1rem">4 / 5</Text>
            </Box>
          </HStack>
          <Chart label="sales" labels={["jan", "feb"]} chartData={[78, 100]} />
        </Box>
        <Box mt="3rem" mb="1rem">
          <Text fontSize="1.5rem" fontWeight="700">
            Reviews
          </Text>
          {reviews.map((review) => (
            <Flex
              align="center"
              boxShadow="md"
              p="1rem"
              borderRadius="md"
              my="1rem"
              justify="space-between"
            >
              {review}
              <Button ml="1rem">Analyze</Button>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}

export default Dashboard;

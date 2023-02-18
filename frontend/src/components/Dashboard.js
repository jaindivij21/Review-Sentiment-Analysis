import { Box, Flex, HStack, Input, Text } from "@chakra-ui/react";
import Chart from "./Chart";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Dashboard() {
  const [productName, setProductName] = useState();
  return (
    <Box>
      <Navbar />
      <Flex h="100%">
        {/* <Sidebar /> */}
        <Box mx="10rem" mt="2rem">
          <Input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="product name"
            w="40%"
            mb="1rem"
          />
          <Text mb="1rem" fontSize="2rem" fontWeight="700">
            Product Name
          </Text>
          <HStack mb="1rem">
            <Box
              as="a"
              href="/reviews"
              boxShadow="base"
              p="4"
              borderRadius="md"
            >
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
      </Flex>
    </Box>
  );
}

export default Dashboard;

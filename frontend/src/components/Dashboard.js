import { Box, Flex, Text } from "@chakra-ui/react";
import Chart from "./Chart";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <Box height="90vh">
      <Navbar />
      <Flex h="100%">
        <Sidebar />
        <Box>
          <Text>Product Name</Text>
          {/* <Chart label="sales" labels={["jan", "feb"]} chartData={[78, 100]} /> */}
        </Box>
      </Flex>
    </Box>
  );
}

export default Dashboard;

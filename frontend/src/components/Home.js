import Form from "./Form";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Home() {
  return (
    <Box height="100vh">
      <Navbar />
      <Box m="1rem" display="flex" flexDirection="column" alignItems="center">
        <Text m="1rem" fontSize="xl" fontWeight="500">
          Upload a file containing reviews (only json)
        </Text>
        <Form />
      </Box>
    </Box>
  );
}

export default Home;

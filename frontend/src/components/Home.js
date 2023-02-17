import Form from "./Form";
import { Box, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box>
      <Box m="1rem" display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="4xl" fontWeight="600">
          Review Sentimental Analysis
        </Text>
        <Text m="1rem" fontSize="xl" fontWeight="500">
          Upload a file containing reviews (only json)
        </Text>
        <Form />
      </Box>
    </Box>
  );
}

export default Home;

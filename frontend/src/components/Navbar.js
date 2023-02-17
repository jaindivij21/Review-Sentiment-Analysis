import { Box, Text, Container, Flex, HStack } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box bgColor="orange" as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }}>
          <Flex justify="center" flex="1">
            <HStack spacing="3">
              <Text fontSize="3xl" color="white" variant="ghost">
                Thrillo Review Sentimental System
              </Text>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;

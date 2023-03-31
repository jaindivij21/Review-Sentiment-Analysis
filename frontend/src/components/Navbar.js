import { Box, Text, Flex, Button } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Box
      p="6"
      bgColor="orange"
      as="nav"
      bg="bg-surface"
      boxShadow="sm"
    >
      <Box>
        <Flex justify="space-evenly" flex="1">
          <Text
            as="a"
            href="/"
            fontSize="3xl"
            color="white"
            variant="ghost"
            fontWeight="600"
          >
            Review Sentimental System
          </Text>
          <Button as="a" href="/dashboard">
            Dashboard
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;

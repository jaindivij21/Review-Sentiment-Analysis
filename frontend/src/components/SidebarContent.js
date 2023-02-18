import { Box, Text } from "@chakra-ui/react";

function SidebarContent({ name }) {
  return (
    <Box
      my="1rem"
      px="6"
      py="4"
      _hover={{ bgColor: "orange", color: "white", cursor: "pointer" }}
      borderRadius="md"
    >
      <Text fontWeight="500" fontSize="1.2rem">
        {name}
      </Text>
    </Box>
  );
}

export default SidebarContent;

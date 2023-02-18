import { Box } from "@chakra-ui/react";
import SidebarContent from "./SidebarContent";

function Sidebar() {
  return (
    <Box width="20%" h="full" boxShadow="xl" textAlign="center" p="2">
      <SidebarContent name="Dashboard" />
      <SidebarContent name="Reviews" />
    </Box>
  );
}

export default Sidebar;

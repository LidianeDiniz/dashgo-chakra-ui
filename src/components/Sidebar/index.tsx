import { Box, Stack } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { NavLink } from "../Sidebar/NavLink";
import { NavSection } from "../Sidebar/NavSection";

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="geral">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiDashboardLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="automação">
          <NavLink icon={RiDashboardLine}>Formulário</NavLink>
          <NavLink icon={RiDashboardLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}

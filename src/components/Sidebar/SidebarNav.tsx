import { Stack } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav (){
    return(
        <Stack spacing="12" align="flex-start">
        <NavSection title="geral">
          <NavLink href="/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink href='/users' icon={RiDashboardLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="automação">
          <NavLink href="/forms" icon={RiDashboardLine}>Formulário</NavLink>
          <NavLink href="/automation" icon={RiDashboardLine}>Automação</NavLink>
        </NavSection>
      </Stack>
    )
}
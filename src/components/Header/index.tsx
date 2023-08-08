import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";



export function Header() {

  const {onOpen} = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true
  })
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      marginX="auto"
      marginTop="4"
      px="6"
      align="center"
    >

      { !isWideVersion && (
        <IconButton icon={<Icon as={RiMenuLine}/>}
        aria-label="Open Navigation"
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        marginRight='2'
        >

        </IconButton>
      )}
      <Logo/>
      
     {isWideVersion &&  <SearchBox/>}
   
      <Flex alignItems="center" marginLeft="auto">
      <NotificationsNav/>

      <Profile showProfileData={isWideVersion} />
      
      </Flex>
    </Flex>
  );
}

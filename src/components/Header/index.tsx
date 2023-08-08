import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";



export function Header() {
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
      <Logo/>
      
     {isWideVersion &&  <SearchBox/>}
   
      <Flex alignItems="center" marginLeft="auto">
      <NotificationsNav/>

      <Profile showProfileData={isWideVersion} />
      
      </Flex>
    </Flex>
  );
}
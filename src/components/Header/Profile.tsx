import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return(
        <Flex align="center" justifyContent="center">
       {showProfileData && (
         <Box mr="4" textAlign="right">
         <Text>Lidiane Diniz</Text>
         <Text color="gray.300" fontSize="small">
           lidiane@email.com
         </Text>
       </Box>
       )}

        <Avatar
          size="md"
          name="Lidiane Diniz"
          src="https://github.com/LidianeDiniz.png"
        />
      </Flex>
    )
}
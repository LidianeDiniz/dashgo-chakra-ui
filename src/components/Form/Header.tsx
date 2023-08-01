import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

export function Header(){
    return(
        <Flex
        as= 'header'
        w='100%'
        maxWidth={1480}
        h='20'
        marginX='auto'
        marginTop='4'
        px='6'
        align='center'
        >
            <Text
            fontSize='3xl'
            fontWeight='bold'
            letterSpacing='tight'
            w='64'
            >
            dashgo

            <Text as='span' marginLeft='1' color='pink.500' >.</Text>
            </Text>

            <Flex 
            as='label'
            flex='1'
            py='4'
            px='8'
           marginLeft='6'
           maxWidth={400}
           alignSelf='center'
           position='relative'
           bg='gray.800'
           color='gray.200'
           borderRadius='full'

            >
                <Input
                color='gray.50'
                variant='unstyled'
                px='4'
                mr='4'
                placeholder="Buscar na plataforma"
                _placeholder={{color: 'gray.400'}}
                />
                <Icon as={RiSearchLine} fontSize={20}/>

            </Flex>

            <Flex
            alignItems='center'
            marginLeft='auto'
            >
             <HStack 
             spacing='8'
             marginX='8'
             paddingRight='8'
             paddingY='1'
             color='gray.300'
             borderRightWidth={1}
             borderColor='gray.700'

             >
             <Icon as={RiNotificationLine} fontSize='20'/>
               <Icon as={RiUserAddLine} fontSize='20'/>
             </HStack>

             <Flex align= 'center' justifyContent='center'>
                <Box mr='4' textAlign='right'>
                    <Text>Lidiane Diniz</Text>
                    <Text color='gray.300' fontSize='small'>lidiane@email.com</Text>
                </Box>

                <Avatar size='md' name="Lidiane Diniz" src="https://github.com/LidianeDiniz.png"/>
             </Flex>
            </Flex>

            </Flex>
    )
}
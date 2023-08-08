import {
  Box, Button, Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack
} from '@chakra-ui/react';
import Link from 'next/link';
import { Input } from "../../components/Form/Input";
import { Header } from '../../components/Header';
import { Sidebar } from "../../components/Sidebar";


export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" padding="8">
        <Heading fontSize='lg' fontWeight='normal'>Criar Usuário</Heading>
        <Divider marginY='6' borderColor='gray.700'></Divider>

        <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
               <Input name="name" label="Nome completo"/>
               <Input name="email" type="email" label="E-mail"/>
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
               <Input name="password" type="password"  label="Senha"/>
               <Input name="password_confirmation" type="password" label="Confirme sua senha"/>
            </SimpleGrid>
        </VStack>

        <Flex marginTop='8' justify='flex-end' >

            <HStack spacing='4'>
               <Link href='/users' passHref>
               <Button as='a' colorScheme="whiteAlpha">Cancelar</Button>
               </Link>
                <Button colorScheme="pink">Salvar</Button>
            </HStack>
        </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

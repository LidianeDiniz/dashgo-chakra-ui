import { Header } from "@/components/Form/Header";
import { Sidebar } from "@/components/Form/Sidebar";
import { Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
          <Sidebar />
        </Flex>
      </Flex>
    </>
  );
}

import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },

    foreColor: theme.colors.gray[500]
  },

  grid: {
    show: false
  },

  dataLabels: {
    enabled: false
  },

  tooltip: {
    enabled: false
  },

  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },

    axisTicks: {
      color: theme.colors.gray[600]
    },

    categories: [
      "2023-08-18T00:00:00.000Z",
      "2023-08-19T00:00:00.000Z",
      "2023-08-20T00:00:00.000Z",
      "2023-08-21T00:00:00.000Z",
      "2023-08-22T00:00:00.000Z",
      "2023-08-23T00:00:00.000Z",
      "2023-08-24T00:00:00.000Z"
    ]
  },

  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
} as const;

const series = [
  {
    name: "series1",
    data: [31, 125, 12, 58, 71, 34, 106]
  }
];

export default function Dashboard() {
  return (
    <>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6">
          <Sidebar />

          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box padding={['6', '8']} bg="gray.800" borderRadius={8} paddingBottom="4">
              <Text fontSize="lg" marginBottom="4">
                Inscritos da semana
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>

            <Box padding={['6', '8']} bg="gray.800" borderRadius={8} paddingBottom="4">
              <Text fontSize="lg" marginBottom="4">
                {" "}
                Taxa de abertura
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

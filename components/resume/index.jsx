import {
  Button,
  Flex,
  Heading,
  Highlight,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export default function Resume() {
  return (
    <Flex
      align="center"
      direction="column"
      marginTop={{ base: "5rem", md: "8rem" }}
    >
      <Flex direction="column" gap="1rem" padding="2rem">
        <Heading
          textAlign="center"
          size={{ base: "lg", md: "2xl" }}
          lineHeight={1.25}
        >
          RESUME
        </Heading>
        <Flex>
          <Text textAlign="center">
            This is a brief sample of my resume and my trajectory in the
            software development world. You can check my whole resume
            downloading the pdf file below.
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2rem" padding="2rem" align="center">
        <Heading
          textAlign="center"
          size={{ base: "md", md: "xl" }}
          lineHeight={1.25}
        >
          <Highlight
            query="Education"
            styles={{ color: "white", bg: "gray.800" }}
          >
            Education
          </Highlight>
        </Heading>
        <Flex gap="1px" direction="column" align="center">
          <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
            Electrical Engineering
          </Text>
          <Text fontSize={{ base: "sm", md: "lg" }}>
            Universidade Federal de Campina Grande
          </Text>
          <Text fontSize={{ base: "sm", md: "lg" }}>2019 - now</Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2rem" padding="2rem" align="center">
        <Heading
          textAlign="center"
          size={{ base: "md", md: "xl" }}
          lineHeight={1.25}
        >
          <Highlight
            query="Work Experience"
            styles={{ color: "white", bg: "gray.800" }}
          >
            Work Experience
          </Highlight>
        </Heading>
        <Flex gap="1rem" direction="column" align="center">
          <Flex gap="1px" direction="column" align="center">
            <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
              Junior Company Member
            </Text>
            <Text fontSize={{ base: "sm", md: "lg" }}>
              June 2020 - July 2021
            </Text>
          </Flex>
          <Flex gap="1px" direction="column" align="center">
            <Text fontSize={{ base: "md", md: "xl" }} fontWeight="bold">
              Development Fellow
            </Text>
            <Text fontSize={{ base: "sm", md: "lg" }}>
              January 2022 - February 2023
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap="2rem" padding="2rem" align="center">
        <Heading
          textAlign="center"
          size={{ base: "md", md: "xl" }}
          lineHeight={1.25}
        >
          <Highlight
            query="Skills and Tools"
            styles={{ color: "white", bg: "gray.800" }}
          >
            Skills and Tools
          </Highlight>
        </Heading>
        <Flex gap="1rem" direction="column" align="center">
          <Text fontSize={{ base: "md", md: "xl" }}>Flask</Text>
          <Text fontSize={{ base: "md", md: "xl" }}>Python</Text>
          <Text fontSize={{ base: "md", md: "xl" }}>Dashboards</Text>
          <Text fontSize={{ base: "md", md: "xl" }}>Data Analysis</Text>
          <Text fontSize={{ base: "md", md: "xl" }}>AI Models</Text>
          <Text fontSize={{ base: "md", md: "xl" }}>Git</Text>
          <Text fontSize={{ base: "md", md: "xl" }}>React</Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap="1rem" padding="2rem" align="center">
        <Text fontSize={{ base: "sm", md: "lg" }}>
          Download my resume in PDF file
        </Text>
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<DownloadIcon />}
            minWidth="12rem"
            size="lg"
            variant="solid"
            bg="gray.800"
            color="white"
            borderColor="gray.500"
            border="2px"
          >
            Download
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}

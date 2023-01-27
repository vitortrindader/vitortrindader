import {
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      minWidth="100%"
      justify="center"
      align="center"
      height="calc(100vh - 5rem)"
    >
      <Flex align="center" gap="2rem" h="70%" w={{ base: "100%", lg: "60%" }}>
        <Flex align="center" justify="center" h="100%">
          <Image src="/images/profileImage.png" alt="Profile" width={500} />
        </Flex>
        <Flex h="100%" align="center" justify="start">
          <Flex width="90%">
            <Flex direction="column" gap="1rem">
              <Heading size="2xl" lineHeight={1.25}>
                <Highlight
                  query="Software Developer"
                  styles={{ color: "white", bg: "gray.800" }}
                >
                  Hi, I'm Vitor and I'm a Software Developer.
                </Highlight>
              </Heading>
              <Flex>
                <Text>
                  I'm very interested in technology and I'm always up to date
                  with new trends. In particular, I am more interested in the
                  areas of Artificial Intelligence, Machine Learning and Data
                  Science.
                </Text>
              </Flex>
              <Flex gap="1rem">
                <Button
                  minWidth="12rem"
                  size="lg"
                  variant="solid"
                  bg="gray.800"
                  color="white"
                  borderColor="gray.500"
                  border="2px"
                >
                  Contact me
                </Button>
                <Button
                  minWidth="12rem"
                  size="lg"
                  variant="outline"
                  color="gray.800"
                  borderColor="gray.500"
                  border="2px"
                >
                  Check my work
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

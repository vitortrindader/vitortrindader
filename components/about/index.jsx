import {
  Button,
  Flex,
  Heading,
  Highlight,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-scroll/modules";

export default function About() {
  return (
    <Flex justify="start" align="center" minH="calc(100vh - 5rem)">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap="2rem"
        width="100%"
        maxWidth="1200px"
        padding="1rem"
      >
        <Flex
          align="center"
          justify="center"
          h="100%"
          width="25%"
          marginTop={{ base: "100px", md: "0px" }}
        >
          <Image
            src="/images/profileImage.png"
            alt="Profile"
            width="100%"
            minWidth="15rem"
          />
        </Flex>
        <Flex h="100%" align="center" justify="start" width="75%">
          <Flex direction="column" gap="1rem">
            <Heading
              textAlign={{ base: "center", md: "start" }}
              size={{ base: "lg", md: "xl" }}
              lineHeight={1.25}
            >
              <Highlight
                query="Software Developer"
                styles={{ color: "white", bg: "gray.800" }}
              >
                Hi, I'm Vitor and I'm a Software Developer.
              </Highlight>
            </Heading>
            <Flex>
              <Text textAlign={{ base: "center", md: "start" }}>
                I'm very interested in technology and I'm always up to date with
                new trends. In particular, I am more interested in the areas of
                Artificial Intelligence, Machine Learning and Data Science.
              </Text>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap="1rem">
              <Button
                minWidth="12rem"
                size="lg"
                variant="solid"
                bg="gray.800"
                color="white"
                borderColor="gray.500"
                border="2px"
              >
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </Button>

              <Button
                minWidth="12rem"
                size="lg"
                variant="outline"
                color="gray.800"
                borderColor="gray.500"
                border="2px"
              >
                <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Check my work
                </Link>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

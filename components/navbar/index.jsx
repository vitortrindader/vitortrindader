import { Flex, Link, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Flex
      minWidth="100%"
      align="center"
      justify="center"
      height="5rem"
      boxShadow="md"
    >
      <Flex width="95%" justify="space-between">
        <Flex w="100%" align="center">
          <Text
            fontWeight={900}
            justify="center"
            fontSize={{ base: "lg", md: "3xl" }}
          >
            VT
          </Text>
        </Flex>

        <Flex gap="1rem" align="center" justify="center" w="100%">
          <Link as={NextLink} href="/" w="100%" align="center">
            Work
          </Link>
          <Link as={NextLink} href="/" w="100%" align="center">
            Resume
          </Link>
          <Link as={NextLink} href="/" w="100%" align="center">
            Contact
          </Link>
        </Flex>

        <Flex gap="1rem" justify="end" w="100%" align="center">
          <Link as={NextLink} href="/">
            <AiFillGithub size={32} />
          </Link>
          <Link as={NextLink} href="/">
            <AiFillLinkedin size={32} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

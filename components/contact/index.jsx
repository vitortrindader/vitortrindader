import { Button, Flex, Link, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Contact() {
  const [textCopied, setTextCopied] = useState(false);
  return (
    <Flex
      id="contact"
      paddingBottom="100px"
      align="center"
      direction="column"
      marginTop={{ base: "3rem", md: "8rem" }}
    >
      <Flex direction="column" gap="1rem" padding="2rem">
        <Heading
          textAlign="center"
          size={{ base: "lg", md: "2xl" }}
          lineHeight={1.25}
        >
          CONTACT
        </Heading>
        <Flex
          marginTop={{ base: "2rem", md: "4rem" }}
          direction={{ base: "column", md: "row" }}
          gap="1rem"
        >
          <Button
            leftIcon={<AiFillInstagram />}
            minWidth="12rem"
            size="lg"
            variant="outline"
            color="gray.800"
            borderColor="gray.500"
            border="2px"
          >
            <Link
              as={NextLink}
              href="https://instagram.com/vitortrindader?igshid=ZDdkNTZiNTM="
              w="100%"
              align="center"
            >
              Instagram
            </Link>
          </Button>
          <Button
            leftIcon={<AiFillLinkedin />}
            minWidth="12rem"
            size="lg"
            variant="outline"
            color="gray.800"
            borderColor="gray.500"
            border="2px"
          >
            <Link
              as={NextLink}
              href="https://www.linkedin.com/in/vitor-ribeiro-2769a41b0/"
              w="100%"
              align="center"
            >
              LinkedIn
            </Link>
          </Button>
          <Flex position="relative">
            <Button
              onClick={() => {
                navigator.clipboard.writeText("vitortrribeiro@gmail.com");
                setTextCopied(true);
                setTimeout(() => setTextCopied(false), 1500);
              }}
              leftIcon={<AiFillMail />}
              minWidth="12rem"
              size="lg"
              variant="outline"
              color="gray.800"
              borderColor="gray.500"
              border="2px"
            >
              Email
            </Button>
            {textCopied && (
              <Text top="50px" fontSize="xs" position="absolute">
                E-mail copied to the clipboard!
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { Button, Flex, Heading } from "@chakra-ui/react";
import { AiFillInstagram, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Contact() {
  return (
    <Flex
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
            Instagram
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
            LinkedIn
          </Button>
          <Button
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
        </Flex>
      </Flex>
    </Flex>
  );
}

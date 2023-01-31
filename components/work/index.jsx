import { Flex, Heading, Text } from "@chakra-ui/react";
import MyCard from "./MyCard";

export default function Work() {
  return (
    <Flex border="1px solid red" align="center" direction="column">
      <Flex direction="column" gap="1rem" padding="2rem">
        <Heading
          textAlign="center"
          size={{ base: "lg", md: "2xl" }}
          lineHeight={1.25}
        >
          WORK
        </Heading>
        <Flex>
          <Text textAlign="center">
            Check my commercial and non commercial projects. If you have any
            questions feel free to ask me for more information.
          </Text>
        </Flex>
      </Flex>
      <Flex padding="1rem" gap="2rem">
        <MyCard
          src="/images/projectimage.jpg"
          title="Título 1"
          description="Bla bla bla testando"
        />
        <MyCard
          src="/images/projectimage2.jpg"
          title="Título 2"
          description="Bla bla bla testando"
        />
        <MyCard
          src="/images/projectimage3.jpg"
          title="Título 3"
          description="Bla bla bla testando"
        />
      </Flex>
    </Flex>
  );
}

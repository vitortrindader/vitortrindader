import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Highlight,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function MyCard({ src, title, description, assuntos }) {
  const textoCard = assuntos?.join(" ");

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={src} alt="Project Image" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>
            <Highlight
              query={assuntos ? assuntos : [""]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "gray.400" }}
            >
              {textoCard ? textoCard : ""}
            </Highlight>
          </Text>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            bg="gray.800"
            color="white"
            borderColor="gray.500"
            border="2px"
            variant="solid"
          >
            Preview
          </Button>
          <Button
            color="gray.800"
            borderColor="gray.500"
            border="2px"
            variant="ghost"
          >
            Github Repo
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

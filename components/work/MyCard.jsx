import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function MyCard({ src, title, description }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={src} alt="Project Image" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Preview
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Github Repo
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

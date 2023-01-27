import About from "@/components/about";
import Navbar from "@/components/navbar";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex minH="100vh" direction="column" align="center">
      <Navbar />
      <About />
    </Flex>
  );
}
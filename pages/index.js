import About from "@/components/about";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Resume from "@/components/resume";
import Work from "@/components/work";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex minH="100vh" direction="column" align="center">
      <Navbar />
      <About />
      <Work />
      <Resume />
      <Contact />
    </Flex>
  );
}

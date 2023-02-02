import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import NextLink from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

import { Link } from "react-scroll/modules";
export default function Navbar() {
  const { width } = useWindowSize();

  return (
    <Flex
      zIndex="100"
      background="white"
      position="fixed"
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

        {width > 738 ? (
          <Flex gap="1rem" align="center" justify="center" w="100%">
            <Flex width="5rem" justify="center">
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                Work
              </Link>
            </Flex>
            <Flex width="5rem" justify="center">
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-220}
                duration={500}
              >
                Resume
              </Link>
            </Flex>
            <Flex width="5rem" justify="center">
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
            </Flex>
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        )}

        {width > 738 ? (
          <Flex gap="1rem" justify="end" w="100%" align="center">
            <Flex as={NextLink} href="https://github.com/vitortrindader">
              <AiFillGithub size={32} />
            </Flex>
            <Flex
              as={NextLink}
              href="https://www.linkedin.com/in/vitor-ribeiro-2769a41b0/"
            >
              <AiFillLinkedin size={32} />
            </Flex>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}

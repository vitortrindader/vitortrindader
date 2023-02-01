import {
  Flex,
  IconButton,
  Link,
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
            <Link as={NextLink} href="/">
              <AiFillGithub size={32} />
            </Link>
            <Link as={NextLink} href="/">
              <AiFillLinkedin size={32} />
            </Link>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}

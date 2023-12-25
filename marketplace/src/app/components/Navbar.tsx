"use client"
import {
    Box,
    Flex,
    Text,
    Button,
    HStack,
    Link,
    useColorMode,
    IconButton,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
import { useState } from "react";
  import { CgProfile } from "react-icons/cg";
  import { FaMoon, FaSun } from "react-icons/fa";
import { Login } from "./Auth/Login";
  
  const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isLoginOpen, setLoginOpen] = useState(false);

    const openLoginModal = () => setLoginOpen(true);
    const closeLoginModal = () => setLoginOpen(false);
    const linkColor = colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.800';
    const linkHoverColor = colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.600';
    const bgColor = colorMode === 'dark' ? 'gray.800' : 'gray.100';
  
    return (
      <Box bg={bgColor} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NextLink href="/" passHref>
              <Link>
                <Text fontSize="xl" fontWeight="bold">
                  NFT Marketplace
                </Text>
              </Link>
            </NextLink>
          </Box>
  
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {["Explore", "Create", "About"].map((link) => (
                <NextLink key={link} href={`/${link.toLowerCase()}`} passHref>
                  <Link
                    px={2}
                    py={1}
                    rounded={"md"}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {link}
                  </Link>
                </NextLink>
              ))}
            </HStack>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<CgProfile />}
              onClick={openLoginModal}
            >
              Login
            </Button>
            <IconButton
              icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
              onClick={toggleColorMode}
              aria-label="Toggle color mode"
            />
          </HStack>
          <Login isOpen={isLoginOpen} onClose={closeLoginModal} />
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  
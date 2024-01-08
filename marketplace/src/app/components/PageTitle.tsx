"use client";
import {
    Box,
    Container,
    Heading,
    Stack,
    useBreakpointValue,
    useColorMode,
  } from "@chakra-ui/react";
  
  interface TitleProps {
    title: string;
  }
  export default function PageTitle(props: TitleProps) {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const { colorMode } = useColorMode();
  
    return (
      <>
        {isDesktop ? (
          <Box as="section">
            <Container py={{ base: "0", md: "20" }}>
              <Stack align="center" textAlign="center">
                <Heading
                  fontWeight="extrabold"
                  size="xl"
                  bgGradient={colorMode === "dark" ?  "linear(to-r, gray.400, gray.200, gray.400)": "linear(to-r, gray.600, gray.400, gray.600)"}
                  bgClip="text"
                  marginBottom={'-100'}
                  as="h1"
                >
                  {props.title}
                </Heading>
              </Stack>
            </Container>
          </Box>
        ) : (
          <Container mb="8" mt="10">
            <Heading
              fontWeight="extrabold"
              size="xl"
              bgGradient="linear(to-r, gray.400, gray.200, gray.400)"
              bgClip="text"
            >
              {props.title}
            </Heading>
          </Container>
        )}
      </>
    );
  }
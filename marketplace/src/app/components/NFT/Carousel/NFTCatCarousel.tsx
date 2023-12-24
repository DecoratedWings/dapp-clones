import { Box, Heading, Stack } from "@chakra-ui/react";
import { images } from "./_data";
import { images2 } from "./_data2";
import { Gallery } from "./Gallery";

export const NFTCatCarousel = () => {
  return (
    <>
      <Stack align="center" textAlign="center">
        <Heading size={{ base: "sm", md: "md" }}>Trending Collections</Heading>
      </Stack>

      <Box
        maxW="3xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Gallery images={images2} />
      </Box>
    </>
  );
};
/* eslint-disable react/no-unescaped-entities */
import { Text, Box } from "@chakra-ui/react";

export const MarketDescriptionComponent = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="xl">🎨 Welcome to Our NFT Marketplace Mockup!</Text>

      <Text mt={2} fontWeight="bold">1. An Interactive Preview 🖼️</Text>
      <Box pl={5}>
        <Text mt={1}>- Discover snippets of a typical NFT marketplace, recreated to capture the essence of the experience.</Text>
        <Text>- It's all about the UI! Dive in and feel what it's like to navigate a digital art bazaar.</Text>
      </Box>

      <Text mt={2} fontWeight="bold">2. Streamlined for Research 📑</Text>
      <Box pl={5}>
        <Text mt={1}>- Traditional marketplaces span multiple pages, but we've condensed it into a single-page application for this research.</Text>
        <Text>- Our goal? Making it easier for you to navigate and provide feedback!</Text>
      </Box>

      <Text mt={2} fontWeight="bold">3. Not Blockchain-Based... Yet ⛓️</Text>
      <Box pl={5}>
        <Text mt={1}>- Just so you know, no real NFTs are involved here. We're focusing on design and experience for now.</Text>
        <Text>- This is a simulation, ensuring you get a feel without the blockchain intricacies.</Text>
      </Box>

      <Text mt={2} fontWeight="bold">4. Feedback is Gold 🌟</Text>
      <Box pl={5}>
        <Text mt={1}>- We're eager to know how accessible our page feels to you.</Text>
        <Text>- Your insights won't just shape our NFT mockup; they'll influence our approach to e-commerce applications as a whole!</Text>
      </Box>

      <Text mt={2}>Explore, engage, and help us craft the future of online marketplaces! 🚀</Text>
    </Box>
  );
};

export default MarketDescriptionComponent;
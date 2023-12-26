/* eslint-disable react/no-unescaped-entities */
import { Text, Box, OrderedList, ListItem } from "@chakra-ui/react";

export const MarketDescriptionComponent = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="xl">🎨 Welcome to Our NFT Marketplace Mockup!</Text>

      <OrderedList spacing={3} mt={2}>
        <ListItem>
          <Text fontWeight="bold">An Interactive Preview 🖼️</Text>
          <Box pl={5}>
            <Text>- Discover snippets of a typical NFT marketplace, recreated to capture the essence of the experience.</Text>
            <Text>- It's all about the UI! Dive in and feel what it's like to navigate a digital art bazaar.</Text>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">Not Blockchain-Based... Yet ⛓️</Text>
          <Box pl={5}>
            <Text>- Just so you know, no real NFTs are involved here. We're focusing on design and experience for now.</Text>
            <Text>- This is a simulation, ensuring you get a feel without the blockchain intricacies.</Text>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">Feedback is Gold 🌟</Text>
          <Box pl={5}>
            <Text>- We're eager to know how accessible our page feels to you.</Text>
            <Text>- Your insights won't just shape our NFT mockup; they'll influence our approach to e-commerce applications as a whole!</Text>
          </Box>
        </ListItem>
      </OrderedList>

      <Text mt={2}>Explore, engage, and help us craft the future of online marketplaces! 🚀</Text>
    </Box>
  );
};

export default MarketDescriptionComponent;

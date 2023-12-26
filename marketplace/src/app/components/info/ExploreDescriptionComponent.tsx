/* eslint-disable react/no-unescaped-entities */
import { Text, Box, OrderedList, ListItem } from "@chakra-ui/react";

export const ExploreDescriptionComponent = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="xl">🔍 Explore Our NFT Collections</Text>

      <OrderedList spacing={3} mt={2}>
        <ListItem>
          <Text fontWeight="bold">Discover Diverse Artworks 🌈</Text>
          <Box pl={5}>
            <Text>- Immerse yourself in a wide range of NFT collections, each showcasing unique art and creativity.</Text>
            <Text>- Use the search feature to find specific artworks or artists that catch your eye.</Text>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">Tailored Exploration 🔎</Text>
          <Box pl={5}>
            <Text>- Utilize our filtering options to narrow down your search based on categories, price range, and more.</Text>
            <Text>- Experience a customized exploration suited to your artistic preferences and interests.</Text>
          </Box>
        </ListItem>

        <ListItem>
          <Text fontWeight="bold">Engage & Interact 🤝</Text>
          <Box pl={5}>
            <Text>- Leave feedback on collections and share your favorite finds with others.</Text>
            <Text>- Your interaction helps us improve and evolve our marketplace to better suit your needs.</Text>
          </Box>
        </ListItem>
      </OrderedList>

      <Text mt={2}>Start your journey through our digital art space and uncover the world of NFTs! 🚀</Text>
    </Box>
  );
};

export default ExploreDescriptionComponent;

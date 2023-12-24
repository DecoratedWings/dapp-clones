import React from 'react';
import { Box, Image, Text, VStack, HStack, Grid } from '@chakra-ui/react';

const TabContent = ({ collections, colorMode }: any) => {
  return (
    <VStack align="start" spacing={4}>
      {/* Headers */}
      <Grid templateColumns="10% 50% 20% 20%" gap={2} w="full" mb={4}>
        <Text fontWeight="bold">Rank</Text>
        <Text fontWeight="bold">Collection Name</Text>
        <Text fontWeight="bold">Floor Price</Text>
        <Text fontWeight="bold">Volume</Text>
      </Grid>

      {/* Collection items */}
      {collections.map((collection: any) => (
        <Grid templateColumns="10% 50% 20% 20%" gap={2} w="full" bg={colorMode === "dark" ? "gray.700" : "gray.200"} p={4} borderRadius="md" key={collection.rank}>
          <Text fontSize="lg" fontWeight="bold">{collection.rank}</Text>
          <HStack spacing={2}>
            <Image src={collection.imageUrl} alt={collection.alt} boxSize="40px" borderRadius="md" />
            <Text>{collection.name}</Text>
          </HStack>
          <Text>{collection.floorPrice}</Text>
          <Text>{collection.volume}</Text>
        </Grid>
      ))}
    </VStack>
  )
}

export default TabContent;
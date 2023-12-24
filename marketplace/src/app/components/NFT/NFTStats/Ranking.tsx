"use client";
import { Heading,Stack, Box, Image, Text, VStack, HStack, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { FilterTabs } from './FilterTabs';

export const Ranking = () => {
  const { colorMode } = useColorMode();


  return (
    <>
      <Stack align="center" textAlign="center">
        <Heading size={{ base: "sm", md: "md" }}>Rankings</Heading>
      </Stack>    
      
      <FilterTabs colorMode={colorMode}/>
    </>
  );
};

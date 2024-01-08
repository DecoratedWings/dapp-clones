import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
  } from '@chakra-ui/react'
  import { CategoryCard } from './CategoryCard'
  import { categories } from './_data'
  
  export const ShowCase = () => (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack spacing={{ base: '6', md: '8', lg: '12' }}>
        <Flex
          justify="space-between"
          align={{ base: 'start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Heading size="lg">New NFT Collections</Heading>
   
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '8', lg: '16' }}>
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  )
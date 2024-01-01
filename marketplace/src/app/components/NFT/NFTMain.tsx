"use client"
import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { posts } from './data';
  import { AppPagination } from './Pagination/AppPagination';
  import { SortbySelect } from './Filters/SortBySelect'

  export const NFTMain = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const [showAll, setShowAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const POSTS_PER_PAGE = 3;
    const { colorMode } = useColorMode();
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const displayedPosts = showAll ? posts : posts.slice(startIndex, endIndex);
  
    return (
      <Box>
        <Container py={{ base: '2', md: '4' }} maxW={'6xl'}>
          <Stack spacing={{ base: '12', md: '16' }}>
            <Stack direction="row" justify="space-between">
              <Stack spacing={{ base: '4', md: '5' }}>
                <Stack spacing="3">
                  <Text colorScheme={colorMode === "dark" ? "white" : "black"} fontWeight="semibold" fontSize={{ base: 'sm', md: 'md' }}>
                    Asset Inventory
                  </Text>
                  <Heading size={{ base: 'sm', md: 'md' }}>Latest Editions</Heading>
                </Stack>
                <Text color="fg.muted" fontSize={{ base: 'lg', md: 'xl' }}>
                  Filter, Navigate by Page, or Show All
                </Text>
              </Stack>
              {!isMobile && (
                <Button size="xl" onClick={() => setShowAll(!showAll)}>
                  {showAll ? 'Hide' : 'Show all'}
                </Button>
              )}
            </Stack>
  
            <HStack spacing={4} mt={3} mb={5} justify="flex-end">
                <Text color={colorMode === "dark" ? "white" : "black"}>Sort by:</Text>
                <Box maxWidth="200px"> 
                <SortbySelect />
                </Box>
              </HStack>
  
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '12', lg: '8' }}>
              {displayedPosts.map((post) => (
                <Link     key={post.id} 
                _hover={{ textDecor: 'none' }} 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                }} role="group">
                  <Stack spacing="8">
                    <Box overflow="hidden">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        width="full"
                        height="15rem"
                        objectFit="cover"
                        transition="all 0.2s"
                        _groupHover={{ transform: 'scale(1.05)' }}
                      />
                    </Box>
                    <Stack spacing="3">
                      <Text fontSize="sm" fontWeight="semibold" color={colorMode === "dark" ? "white" : "black"}>
                        {post.category}
                      </Text>
                      <Heading size="xs">{post.title}</Heading>
                      <Text color="fg.muted">{post.excerpt}</Text>
                    </Stack>
                    <HStack>
                      <Avatar src={post.author.avatarUrl} name={`${post.author.name} avatar`} boxSize="10" />
                      <Box fontSize="sm">
                        <Text fontWeight="medium">{post.author.name}</Text>
                        <Text color="fg.muted">{post.publishedAt}</Text>
                      </Box>
                    </HStack>
                  </Stack>
                </Link>
              ))}
            </SimpleGrid>
            {isMobile && (
              <Button size="xl" onClick={() => setShowAll(!showAll)} mt={4}>
                {showAll ? 'Hide' : 'Show all'}
              </Button>
            )}
          </Stack>
  
          {showAll ? (
            <Box pb={"100px"}></Box>
          ) : (
            <AppPagination
              totalPosts={posts.length}
              currentPage={currentPage}
              postsPerPage={POSTS_PER_PAGE}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </Container>
      </Box>
    );
  };
  
  export default NFTMain;
  
"use client";

import {
    Box,
    BoxProps,
    Flex,
    Heading,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import { Category } from './_data'
  
  interface Props {
    category: Category
    rootProps?: BoxProps
  }

  export const CategoryCard = (props: Props) => {
    const { category, rootProps } = props;

    return (
      <Box
        position="relative"
        key={category.name}
        borderRadius="xl"
        overflow="hidden"
        minH={{ base: 'sm', lg: 'auto' }}
        {...rootProps}
      >
        <Link>
          <Image
            src={category.imageUrl}
            height="full"
            objectFit="cover"
            alt={category.alt}
            fallback={<Skeleton />}
          />
          <Box
            position="absolute"
            inset="0"
            bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 47.92%, #000000 100%)"
            boxSize="full"
          />
          <Flex
            color="white"
            direction="column-reverse"
            position="absolute"
            inset="0"
            boxSize="full"
            px={{ base: '4', md: '18' }}
            py={{ base: '6', md: '8', lg: '10' }}
          >
            <Stack spacing="5">
              <Stack spacing="1">
                <Heading fontSize="2xl" fontWeight="extrabold" color="white" bg={"black"} >
                  {category.name}
                </Heading>
                <Text fontSize="lg" fontWeight="medium" color="white"bg={"black"}>
                  {category.description}
                </Text>
              </Stack>
              
            </Stack>
          </Flex>
        </Link>
      </Box>
    )
  }
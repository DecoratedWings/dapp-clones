import React from 'react';
import { Box, Container, Heading, Text, VStack, Image, Center, Link } from '@chakra-ui/react';

const AboutPage = () => {
  return (
    <Container maxW="2xl" py={{ base: '5', md: '10' }}>
      <VStack spacing={5} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          About 
        </Heading>

        <Center>
            <Image
            borderRadius="lg"
            src="/logo.png" 
            alt="About Us"
            height={200}
            width={200}
            />
        </Center>
        <Text fontSize="lg" textAlign="justify">
          Welcome to accessible nft marketplace, where we showcase better practices for a marketplace or e-commerce type of dapp. 
          We use proper color contrast throughout the application, alternative text description for images, and appropriate tabbing and skip functionality.
        </Text>

        <Text fontSize="lg" textAlign="justify">
          E-commerce and NFT type decentralized applications are the more difficult categorizations to code accessibly, however as they are likely to attract many mainstream users, it is imperative that 
          they be made accessible.
        </Text>

        <Text fontSize="lg" textAlign="justify">
          Elements or components most pertinent from a UX/UI perspective are carousels, filters, pagination, skip navigation, 
          color contrast, and site maps in the footer. 
        </Text>
        <Center>
            <Heading as="h2" size="md">
            Thank you
            </Heading>
        </Center>
        {/* Team member profiles, achievements, etc., can be added here. */}

        <Heading as="h2" size="md">
          References
        </Heading>

        <Text fontSize="lg" textAlign="justify">
          <li><Link href='https://www.w3.org/TR/WCAG22/'>WCAG 2.2</Link></li>
          <li><Link href='https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/'>WCAG Updates</Link></li>
          <li><Link href='https://www.w3.org/WAI/ARIA/apg/patterns/'>ARIA Patterns Guide</Link></li>
          <li><Link href='https://cssgradient.io/'>CSS Gradient - shades of colors</Link></li>
          <li><Link href='https://pro.chakra-ui.com/components/free'>Chakra UI Community Components</Link></li>
          <li><Link href='https://chakra-ui.com/blog/the-beginners-guide-to-building-an-accessible-web#8-use-aria-landmarks'>Chakra UI Guide</Link></li>

        </Text>

        {/* You can also include other sections like "Our Values", "Our Approach", "Community Involvement", etc. */}

      </VStack>
    </Container>
  );
};

export default AboutPage;

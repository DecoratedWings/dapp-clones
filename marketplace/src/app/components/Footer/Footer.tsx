import { ButtonGroup, Container, IconButton, Stack, Text, Link, Box, VStack, Heading } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    <Stack spacing={{ base: '4', md: '5' }} direction={{ base: 'column', md: 'row' }} justify="space-between">
      <Box>
        <Image src="/logo.png" alt="Random computer logo" width={100} height={100}/>
        <Text fontSize="sm" color="fg.subtle" mt={2}>
          &copy; {new Date().getFullYear()} Accessible NFT Marketplace. All rights reserved.
        </Text>
      </Box>

      <VStack align="start">
        <Heading size="sm">Sitemap</Heading>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/explore">Explore</Link>
        <Link href="mailto:research@hapticsdao.com">Contact Us</Link>

      </VStack>

      <VStack align="start">
        <Heading size="sm">Legal</Heading>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Service</Link>
      </VStack>

      <ButtonGroup variant="tertiary">
        <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
      </ButtonGroup>
    </Stack>
  </Container>
)

export default Footer;

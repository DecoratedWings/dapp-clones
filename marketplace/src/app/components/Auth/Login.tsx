import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Link,
    Stack,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
  } from '@chakra-ui/react';
  import { OAuthButtonGroup } from './OAuthButtonGroup';
  import { PasswordField } from './PasswordField';
  import Image from 'next/image';
  
  export const Login = ({ isOpen, onClose }: any) => (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in to your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container maxW="lg" py={{ base: '1', md: '5' }} px={{ base: '0', sm: '8' }}  maxH="80vh">
            <Stack spacing="8">
              <Stack spacing="6">
                <Image src="/logo.png" alt="Random computer logo" height={100} width={100}/>
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                  <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                  <Text color="fg.muted">
                    Don&apos;t have an account? <Link href="#">Sign up</Link>
                  </Text>
                </Stack>
              </Stack>
              <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}
              >
                <Stack spacing="6">
                  <Stack spacing="5">
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input id="email" type="email" />
                    </FormControl>
                    <PasswordField />
                  </Stack>
                  <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant="text" size="sm">
                      Forgot password?
                    </Button>
                  </HStack>
                  <Stack spacing="6">
                    <Button>Sign in</Button>
                    <HStack>
                      <Divider />
                      <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                        or continue with
                      </Text>
                      <Divider />
                    </HStack>
                    <OAuthButtonGroup />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
  
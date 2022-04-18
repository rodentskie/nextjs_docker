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
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { PasswordField } from '@components/PasswordField';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

const Home: FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signIn = (): void => {
    setLoading(true);

    setTimeout(() => {
      void router.push('/home');
      setLoading(false);
    }, 1500);
  };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Image
            src="/logo.png"
            m="auto"
            w="120px"
            h="120px"
            alt="logo"
            borderRadius="50%"
            border="2px solid #171923"
          />
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size="md">Log in to your account</Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" required />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultIsChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button colorScheme="teal" onClick={signIn} disabled={loading}>
                {loading ? <Spinner size="sm" /> : 'Sign in'}
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;

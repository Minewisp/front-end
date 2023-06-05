import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import CopyableCode from '../utility/CopyableCode';

export function Login() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg={useColorModeValue('gray.100', 'gray.800')}
    >
      <Card
        p={6}
        maxWidth="400px"
        boxShadow="md"
        borderRadius={20}
        bg={useColorModeValue('gray.50', 'gray.700')}
      >
        <Stack divider={<StackDivider />} spacing={4}>
          <Box textAlign="center" spacing={4}>
            <Box display="flex" justifyContent="center" mb="1.4rem">
              <Image src="logo192.png" align="center" boxSize="5rem" />
            </Box>
            <Heading size="lg">Login</Heading>
          </Box>
          <Box textAlign="center">
            <Text pt="2" fontSize="sm">
              Join the server using the IP <CopyableCode code="minewisp.net" />.
            </Text>
            <Text pt="2" fontSize="sm">
              Enter your Minecraft username below and click on Login when ready.
            </Text>
          </Box>
          <FormControl>
            <FormLabel>Minecraft Username</FormLabel>
            <Input type="text" placeholder="Enter username" required />
          </FormControl>
          <Button colorScheme="blue">Generate OTP</Button>
        </Stack>
      </Card>
    </Box>
  );
}

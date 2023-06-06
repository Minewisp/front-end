import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  PinInput,
  PinInputField,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import CopyableCode from '../utility/CopyableCode';
import { useState } from 'react';

const LoginStage = ({ username, setUsername, handleLogin }) => {
  return (
    <Stack divider={<StackDivider />} spacing={4}>
      <Box textAlign="center" spacing={4}>
        <Heading size="lg">Login</Heading>
      </Box>
      <Box textAlign="center">
        <Text pt="2" fontSize="sm">
          Join the server using the IP <CopyableCode code="minewisp.net" />.
        </Text>
        <Text pt="2" fontSize="sm">
          Enter your Minecraft username below and click on the button when
          ready.
        </Text>
      </Box>
      <FormControl>
        <Heading size="xs" textTransform="uppercase" mb={2}>
          Username
        </Heading>
        <Input
          type="text"
          placeholder="Your Minecraft username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </FormControl>
      <Button
        colorScheme="blue"
        onClick={handleLogin}
      >
        Generate OTP
      </Button>
    </Stack>
  );
};

const OtpStage = ({ otp, setOtp, handleOtpVerification }) => {
  return (
    <Stack divider={<StackDivider />} spacing={4}>
      <Box textAlign="center" spacing={4}>
        <Heading size="lg">Verification</Heading>
      </Box>
      <Box textAlign="center">
        <Text pt="2" fontSize="sm">
          Go back in-game and type the code you recieved.
        </Text>
      </Box>
      <FormControl>
        {/* <Heading size="xs" textTransform="uppercase" mb={2}>
          One-Time Password
        </Heading> */}
        <Center>
          <HStack>
            <PinInput
              size="lg"
              autoFocus
              value={otp}
              onChange={v => setOtp(v)}
              onComplete={handleOtpVerification}
              isPassword={true}
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </Center>
      </FormControl>
      <Button colorScheme="blue" onClick={handleOtpVerification}>
        Login
      </Button>
    </Stack>
  );
};

export function Login() {
  const [stage, setStage] = useState(1);
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [isButtonLoading, setButtonLoading] = useState(false);

  const handleLogin = () => {
    setButtonLoading(true);
    setTimeout(() => setStage(2), 1000); // just testing
  };

  const handleOtpVerification = () => {};

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
        // borderRadius={0}
        // borderBottomRightRadius={50}
        // borderTopLeftRadius={50}
        bg={useColorModeValue('gray.50', 'gray.700')}
      >
        <Box display="flex" justifyContent="center" mb="1.4rem">
          <Image src="logo192.png" align="center" boxSize="5rem" />
        </Box>
        {stage === 1 && (
          <LoginStage
            username={username}
            setUsername={setUsername}
            handleLogin={handleLogin}
          />
        )}
        {stage === 2 && (
          <OtpStage
            otp={otp}
            setOtp={setOtp}
            handleOtpVerification={handleOtpVerification}
          />
        )}
      </Card>
    </Box>
  );
}

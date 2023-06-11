import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import CopyableCode from '../utility/CopyableCode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginStage = ({ username, setUsername, handleLogin, isLoading }) => {
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
        type="submit"
        onClick={handleLogin}
        isLoading={isLoading}
        loadingText="Generating OTP..."
      >
        Generate OTP
      </Button>
    </Stack>
  );
};

const OtpStage = ({ otp, setOtp, handleOtpVerification, isLoading }) => {
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
              onSubmit={handleOtpVerification}
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
      <Button
        colorScheme="blue"
        onClick={handleOtpVerification}
        isLoading={isLoading}
        loadingText="Logging in..."
      >
        Login
      </Button>
    </Stack>
  );
};

export function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stage, setStage] = useState(1);
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [modalData, setModalData] = useState({ title: '', message: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isLoading) return;
    setLoading(true);
    setTimeout(() => {
      // to write http request code here
      setLoading(false);
      if (username !== 'Steve') {
        setModalData({
          title: 'Error',
          message:
            "You don't seem to be online. Join the server to recieve an OTP.",
        });
        onOpen();
        return;
      }
      setStage(2);
    }, 750); // just testing
  };

  const handleOtpVerification = () => {
    if (isLoading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 750);
  };

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
            isLoading={isLoading}
          />
        )}
        {stage === 2 && (
          <OtpStage
            otp={otp}
            setOtp={setOtp}
            handleOtpVerification={handleOtpVerification}
            isLoading={isLoading}
          />
        )}
      </Card>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(0deg)"
        />
        <ModalContent>
          <ModalHeader>{modalData.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{modalData.message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Understood</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

import {
  Box,
  Flex,
  VStack,
  Heading,
  Button,
  Grid,
  Divider,
  Image,
  Text,
  Card,
  SimpleGrid,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  Progress,
} from '@chakra-ui/react';
import {
  faGamepad,
  faServer,
  faGripHorizontal,
  faGlobe,
  faUser,
  faRightFromBracket,
  faBell,
  faQuestion,
  faPlay,
  faEdit,
  faStop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {
  return (
    <Flex bg="gray.800">
      <Box
        bg="gray.900"
        color="gray.400"
        minW="16rem"
        h="100vh"
        p={6}
        boxShadow="lg"
        overflowY="auto"
      >
        <Flex alignItems="center">
          <Box mr={4}>
            <Image src="logo192.png" boxSize="3rem" />
          </Box>
          <Heading size="lg">Minewisp</Heading>
        </Flex>
        <Divider my={6} />
        <VStack spacing={8} align="stretch">
          <VStack spacing={2} align="stretch">
            <Heading
              size="xs"
              mb={2}
              color="gray.500"
              textTransform="uppercase"
            >
              General
            </Heading>
            <TempNavButton text="My Servers" icon={faServer} active />
            <TempNavButton text="Servers Online" icon={faGripHorizontal} />
            <TempNavButton text="Players Online" icon={faGamepad} />
            <TempNavButton text="All Servers" icon={faGlobe} />
          </VStack>

          <VStack spacing={2} align="stretch">
            <Heading
              size="xs"
              mb={2}
              color="gray.500"
              textTransform="uppercase"
            >
              Help
            </Heading>
            <TempNavButton text="FAQs" icon={faQuestion} />
          </VStack>

          <VStack spacing={2} align="stretch">
            <Heading
              size="xs"
              mb={2}
              color="gray.500"
              textTransform="uppercase"
            >
              Personal
            </Heading>
            <TempNavButton text="My Profile" icon={faUser} />
            <TempNavButton text="Notifications" icon={faBell} />
            <TempNavButton text="Logout" icon={faRightFromBracket} />
          </VStack>
        </VStack>
      </Box>

      <Box flex={1} p={8} h="100vh" overflowY="auto">
        <VStack align="stretch">
          <Heading size="lg">My Servers</Heading>
          <Text color="gray.400">A list of all the servers you own.</Text>
          <Divider my={3} />
          <SimpleGrid
            spacing={8}
            templateColumns="repeat(auto-fill, minmax(400px, auto))"
          >
            <TempServerCard />
            <TempServerCard />
            <TempServerCard />
            <TempServerCard />
            <TempServerCard />
          </SimpleGrid>
        </VStack>
      </Box>
    </Flex>
  );
}

const TempNavButton = ({ text, icon, active }) => {
  console.log(icon);
  return (
    <Box
      display="flex"
      alignItems="center"
      py={2}
      px={4}
      borderRadius="lg"
      transition="background-color 0.2s, color 0.2s"
      _hover={{ backgroundColor: 'gray.700', cursor: 'pointer' }}
      _selection={{ backgroundColor: 'transparent' }}
      _focus={{ outline: 'none' }}
      backgroundColor={active ? 'gray.800' : 'gray.900'}
      userSelect="none"
    >
      <FontAwesomeIcon icon={icon} width="1.6rem" />
      <Text ml={3}>{text}</Text>
    </Box>
  );
};

const TempProgressBar = ({ text, progress, progressText, color }) => {
  return (
    <>
      {/* <Badge textAlign="center" fontSize={14}>{text}</Badge> */}
      <Box color="gray.400">{text}</Box>
      <Box>
        <Progress
          size="xs"
          value={progress}
          borderRadius={2}
          colorScheme={color}
        />
        <Flex mt={1} justifyContent="space-evenly">
          <Badge colorScheme={color}>{progressText}</Badge>
        </Flex>
      </Box>
    </>
  );
};

const TempServerCard = () => {
  return (
    <Card borderRadius={10}>
      <CardHeader bg="gray.900" borderTopRadius="inherit">
        <Flex justifyContent="space-between">
          <Flex flexDirection="column">
            <Heading size="md" mb={1}>
              MCServer
            </Heading>
            <Text color="gray.500">Default server description.</Text>
          </Flex>
          <Badge
            colorScheme="green"
            fontSize="0.8rem"
            borderRadius={10}
            p={2}
            ml={4}
            alignSelf="flex-start"
          >
            <Flex alignItems="center">
              {/* In-case I need to add something more */}
              <Text>Online</Text>
            </Flex>
          </Badge>
        </Flex>
      </CardHeader>
      {/* <Divider /> */}
      <CardBody>
        <Grid templateColumns="auto 1fr" gap={4} alignItems="center" rowGap={6}>
          <TempProgressBar
            text="CPU Usage"
            progress={15}
            progressText="15%"
            color="blue"
          />
          <TempProgressBar
            text="RAM Usage"
            progress={85}
            progressText="1.7 GB / 2 GB"
            color="red"
          />
          <TempProgressBar
            text="Disk Usage"
            progress={65}
            progressText="6.5 GB / 10 GB"
            color="yellow"
          />
        </Grid>
      </CardBody>
      <CardFooter
        bg="gray.600"
        justifyContent="right"
        py={4}
        borderBottomRadius="inherit"
      >
        <Flex gap={2}>
          <Button size="sm" leftIcon={<FontAwesomeIcon icon={faPlay} />}>
            Start
          </Button>
          <Button size="sm" leftIcon={<FontAwesomeIcon icon={faStop} />}>
            Stop
          </Button>
          <Button size="sm" leftIcon={<FontAwesomeIcon icon={faEdit} />}>
            Edit
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

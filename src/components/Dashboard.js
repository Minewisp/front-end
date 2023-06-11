import {
  Box,
  Flex,
  VStack,
  Heading,
  Button,
  Grid,
  GridItem,
  Divider,
  Image,
  Text,
  Card,
  SimpleGrid,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton,
  Badge,
  Code,
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
  faLifeRing,
  faQuestion,
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
      >
        <Flex alignItems="center">
          <Box mr={4}>
            <Image src="logo192.png" boxSize="48px" />
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

      <Box flex="1" p={8}>
        <VStack align="stretch">
          <Heading size="lg">My Servers</Heading>
          <Text color="gray.400">A list of all the servers you own.</Text>
          <Divider my={3} />
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(400px, 500px))"
          >
            <Card>
              <CardHeader>
                <Flex justifyContent="space-between">
                  <Heading size="md" alignSelf="center">
                    MCServer
                  </Heading>
                  <Badge
                    colorScheme="green"
                    fontSize="0.8rem"
                    borderRadius={10}
                    p={2}
                  >
                    Online
                  </Badge>
                </Flex>
              </CardHeader>
              <CardBody>
                <Grid templateColumns="auto 1fr" gap={4}>
                  <Box>CPU Usage</Box>
                  <Box>
                    <Progress size="sm" value={15} borderRadius={4} />
                    <Text mt={1} textAlign="center">
                      15%
                    </Text>
                  </Box>
                  <Box>RAM Usage</Box>
                  <Box>
                    <Progress size="sm" value={65} borderRadius={4} />
                    <Text mt={1} textAlign="center">
                      65%
                    </Text>
                  </Box>
                  <Box>Disk Usage</Box>
                  <Box>
                    <Progress size="sm" value={35} borderRadius={4} />
                    <Text mt={1} textAlign="center">
                      45%
                    </Text>
                  </Box>
                </Grid>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
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

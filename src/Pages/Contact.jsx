import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Icon,
  Link,
  ChakraProvider,
} from '@chakra-ui/react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

function Contact() {
  const address = '	Legacy Emanuel Medical Center, 2801 N Gantenbein Ave, Portland, OR - 97227';
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(
    address
  )}`;

  return (
    <ChakraProvider>
      <Flex
        flexDirection="row"
        // minHeight="50vh"
        bgImage="https://admin.risingkashmir.com/Source/News/668fba0a-9927-48c0-a950-4801e4868ad8.png"
        bgSize="cover"
        bgPosition="center"
        opacity="0.7"
      >
        {/* First Part */}
        <Box
          py={8}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <Box mb={6}>
              <Icon as={MdLocationOn} fontSize="3xl" mb={2} color="black" />
            </Box>
            <Text fontSize="xl" mb={2} fontWeight="600">
              Address
            </Text>
            <Link href={googleMapsUrl} isExternal color="black" fontWeight="bold">
              <Text fontSize="lg" marginLeft={10} marginRight={10} textAlign={'center'}>{address}</Text>
            </Link>
          </Flex>
        </Box>

        {/* Second Part */}
        <Box
          py={8}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <Box mb={6}>
              <Icon as={MdPhone} fontSize="3xl" mb={2} color="black" />
            </Box>
            <Text fontSize="xl" mb={2} fontWeight="600">
              Lets Talk
            </Text>
            <a href="tel:+13373004555" style={{ textDecoration: 'none' }}>
                <Text fontSize="lg" cursor="pointer">
                +1 337 300 4555
                </Text>
            </a>
          </Flex>
        </Box>

        {/* Third Part */}
        <Box
          py={8}
          flex={['1', '1/3']}
          bg="rgba(255, 255, 255, 0.7)"
          transition="background-color 0.5s ease-in-out" 
          _hover={{
            bg: 'rgba(255, 255, 255, 0.9)',
          }}
          margin="20px"
          borderRadius="md"
          boxShadow="lg"
        >
          <Flex flexDirection="column" alignItems="center" color="black">
            <Box mb={6}>
              <Icon as={MdEmail} fontSize="3xl" mb={2} color="black" />
            </Box>
            <Text fontSize="xl" mb={2} fontWeight="600">
              General Support
            </Text>
            <a href="mailto:contact@example.com" style={{ textDecoration: 'none' }}>
                <Text fontSize="lg" cursor="pointer">
                contact@example.com
                </Text>
            </a>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Contact;


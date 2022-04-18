import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <Box h="80px" bg="#1A202C" w="100vw" px={10}>
      <Box color="white" d="flex">
        <Text m="6" cursor="pointer">
          Menu 1
        </Text>
        <Text m="6" cursor="pointer">
          Menu 2
        </Text>
        <Text m="6" cursor="pointer">
          Menu 3
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;

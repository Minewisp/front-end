import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WebRoutes from './WebRoutes';

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <ChakraProvider>
      <WebRoutes />
    </ChakraProvider>
  );
}

export default App;

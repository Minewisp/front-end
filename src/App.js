import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import WebRoutes from './WebRoutes';

function App() {
  return (
    // <ChakraProvider>
    <ChakraProvider
      theme={extendTheme({
        config: {
          initialColorMode: 'dark',
          useSystemColorMode: false,
        },
      })}
    >
      <WebRoutes />
    </ChakraProvider>
  );
}

export default App;

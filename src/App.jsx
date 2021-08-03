import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

import MainComponent from './components/MainComponent';


export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </ChakraProvider>
  );
}



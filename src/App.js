import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react";
import MainComponent from './components/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <ChakraProvider>
          <MainComponent />
        </ChakraProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;

import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import { myTheme } from './styles/myTheme';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <HashRouter>
    <ChakraProvider theme={myTheme}>
      <StrictMode>
        <ColorModeScript />
        <Routes>
          <Route path='/' element={<About/>}/>
        </Routes>
      </StrictMode>
    </ChakraProvider>
  </HashRouter>
  
);

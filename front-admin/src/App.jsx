import React from 'react';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import AppRoutes from './AppRoutes';
import { AppContextProvider } from './AppContext';

export default () => (
  <>
    <CssBaseline />
    <Router>
      <DragDropContextProvider backend={HTML5Backend}>
        <AppContextProvider>
          <Header />
          <Container>
            <AppRoutes />
          </Container>
        </AppContextProvider>
      </DragDropContextProvider>
    </Router>
  </>
);

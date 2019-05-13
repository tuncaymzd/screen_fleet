import React from 'react';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CompositionBuilder from './components/CompositionBuilder';

export default () => (
  <DragDropContextProvider backend={HTML5Backend}>
    <CompositionBuilder />
  </DragDropContextProvider>
);

import React from 'react';

import BaseNode from './BaseNode';
import MultiNode from './MultiNode';

export default (type) => {
  switch (type) {
    case 'split':
    case 'slide':
      return MultiNode;
    case 'picture':
    case 'video':
      return BaseNode;
    default:
      return undefined;
  }
};

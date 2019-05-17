import React, { useState } from 'react';

import nodeChooser from './Node';

import './Node.scss';

export default ({ moduleTree }) => {
  const Node = nodeChooser(moduleTree.type);
  return <Node {...moduleTree} />;
};

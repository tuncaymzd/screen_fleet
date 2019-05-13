import React from 'react';

import _ from 'lodash';

import nodeChooser from './Node';
import EmptyNode from './EmptyNode';

export default ({
  type, checked, parameters: { nb }, children,
}) => {
  const icon = (() => {
    switch (type) {
      case 'split': return 'fas fa-columns';
      case 'slide': return 'fas fa-clone';
      default: return '';
    }
  })();

  const nbChildren = (() => {
    switch (type) {
      case 'split': return 2;
      case 'slide': return nb;
      default: return 0;
    }
  })();

  return (
    <ul className="tree">
      <li>
        <div />
        <input type="checkbox" checked={checked} />
        <div className="node">
          <div>
            <i className={icon} />
          </div>
          <div>{type}</div>
        </div>
        {_.range(nbChildren).map((i) => {
          if (children[i] !== undefined) {
            const Node = nodeChooser(children[i].type);
            return <Node key={i} {...children[i]} />;
          }
          return <EmptyNode />;
        })}
      </li>
    </ul>
  );
};

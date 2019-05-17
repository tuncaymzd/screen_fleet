import React from 'react';

export default ({ type, parameters: { url } }) => {
  const icon = (() => {
    switch (type) {
      case 'picture': return 'fas fa-image';
      case 'video': return 'fas fa-film';
      default: return '';
    }
  })();

  return (
    <ul className="tree">
      <li>
        <div />
        <div />
        <div className="node">
          <div>
            <i className={icon} />
          </div>
          <div>{type}</div>
        </div>
      </li>
    </ul>
  );
};

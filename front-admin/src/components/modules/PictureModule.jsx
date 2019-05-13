import React from 'react';

import './PictureModule.scss';

export default ({ url }) => (
  <div className="module-picture" style={{ backgroundImage: `url(${url})` }} />
);

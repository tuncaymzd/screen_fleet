import React from 'react';

import './VideoModule.scss';

export default ({ url }) => (<iframe className="module-video" src={url} />);

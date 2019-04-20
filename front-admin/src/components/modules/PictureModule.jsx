import React from 'react';

import './PictureModule.scss';

export default ({ url }) => {
    return (
        <div className="module-picture" style={{ backgroundImage: `url(${url})` }} />
    );
};

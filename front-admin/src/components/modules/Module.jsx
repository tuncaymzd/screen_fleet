import React from 'react';

import ErrorModule from './ErrorModule';
import SplitModule from './SplitModule';
import SlideModule from './SlideModule';
import PictureModule from './PictureModule';
import VideoModule from './VideoModule';

export default ({ module }) => {
    if (module) {
        const { type, children, parameters } = module;
        // eslint-disable-next-line default-case
        switch (type) {
            // MULTI
            case 'split': return <SplitModule modules={children} direction={parameters.direction} />;
            case 'slide': return <SlideModule modules={children} numbers={parameters.children} autoplay={parameters.autoplay} delay={parameters.delay} />;
            // BASE
            case 'picture': return <PictureModule url={parameters.url} />;
            case 'video': return <VideoModule url={parameters.url} />;
        }
    }
    return <ErrorModule />;
};

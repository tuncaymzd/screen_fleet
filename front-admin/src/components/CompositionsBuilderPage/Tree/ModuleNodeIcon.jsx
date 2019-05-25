import React from 'react';

import SlideIcon from '@material-ui/icons/Slideshow';
import SplitIcon from '@material-ui/icons/ViewAgenda';
import PictureIcon from '@material-ui/icons/Photo';
import VideoIcon from '@material-ui/icons/Movie';
import UnknownIcon from '@material-ui/icons/Help';

export default ({ type }) => {
  switch (type) {
    case 'picture': return <PictureIcon />;
    case 'video': return <VideoIcon />;
    case 'split': return <SplitIcon />;
    case 'slide': return <SlideIcon />;
    case 'unknown': return <UnknownIcon />;
    default: return undefined;
  }
};

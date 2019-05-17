import React, { useState } from 'react';

import Root from './modules/Root';
import Builder from './builder/Builder';

import './CompositionBuilder.scss';

export default () => {
  const [moduleTree, setModuleTree] = useState({
    type: 'split',
    parameters: {
      direction: 'horizontal',
    },
    children: [
      {
        type: 'picture',
        parameters: {
          url: 'https://hdwallpaper20.com/wp-content/uploads/2016/04/Galaxy-wallpaper-Awesome-Collections-awesome_space_pink-colour-galaxy_wallpaper_hd.jpg',
        },
      },
      {
        type: 'split',
        parameters: {
          direction: 'vertical',
        },
        children: [
          {
            type: 'picture',
            parameters: {
              url: 'https://wallpapertag.com/wallpaper/full/b/6/5/151147-download-wallpaper-galaxy-1920x1080-for-iphone-7.jpg',
            },
          },
        ],
      },
    ],
  });
  return (
    <div className="compositionbuilder-root">
      <div className="compositionbuilder-moduleview">
        <Root moduleTree={moduleTree} />
      </div>
      <div className="compositionbuilder-moduletree">
        <Builder moduleTree={moduleTree} />
      </div>
    </div>
  );
};

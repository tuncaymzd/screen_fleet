import React from 'react';

import Root from './components/modules/Root';

export default () => (
  <Root module={{
    type: 'split',
    parameters: {
      direction: 'horizontal',
    },
    children: [
      {
        type: 'slide',
        parameters: { 
          children: 3,
          autoplay: true,
          delay: 10000,
        },
        children: [
          {
            type: 'split',
            parameters: {
              direction: 'vertical',
            },
            children: [
              {
                type: 'picture',
                parameters: { 
                  url: 'https://yt3.ggpht.com/-ORzY31b0z6Q/AAAAAAAAAAI/AAAAAAAAAAA/FES0Dp1ordg/s900-c-k-no/photo.jpg',
                },
              },
              {
                type: 'video',
                parameters: {
                  url: 'https://www.youtube.com/embed/9LoK8N5WfNQ',
                },
              },
            ],
          },
          {
            type: 'picture',
            parameters: {
              url: 'https://hdwallpaper20.com/wp-content/uploads/2016/04/Galaxy-wallpaper-Awesome-Collections-awesome_space_pink-colour-galaxy_wallpaper_hd.jpg',
            },
          },
        ],
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
          {
            type: 'video',
            parameters: {
              url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            },
          },
        ],
      },
    ],
  }} />
);

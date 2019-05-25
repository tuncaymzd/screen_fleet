import React, { useState } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UnknownIcon from '@material-ui/icons/Help';
import PhotoIcon from '@material-ui/icons/Photo';
import MovieIcon from '@material-ui/icons/Movie';

import FileModal from './FileModal';

export default ({ type, name, url }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <ListItem button onClick={() => setOpened(true)}>
        <ListItemIcon>
          {(() => {
            switch (type) {
              case 'picture':
                return <PhotoIcon />;
              case 'video':
                return <MovieIcon />;
              default:
                return <UnknownIcon />;
            }
          })()}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
      <FileModal
        opened={opened}
        close={() => setOpened(false)}
        type={type}
        url={url}
        name={name}
      />
    </>
  );
};

import React, { useState, useEffect } from 'react';

import _ from 'lodash';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import UnknownIcon from '@material-ui/icons/Help';
import PhotoIcon from '@material-ui/icons/Photo';
import MovieIcon from '@material-ui/icons/Movie';
import UploadIcon from '@material-ui/icons/CloudUpload';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import CrossIcon from '@material-ui/icons/HighlightOff';

import { useAppContext } from '../../AppContext';

export default ({
  id, type, name, file,
}) => {
  const { addResource } = useAppContext();
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    addResource(file, (_status) => {
      if (_status) setStatus('success');
      else setStatus('error');
    });
  }, []);

  return (
    <ListItem button key={id}>
      <ListItemIcon>
        {(() => {
          switch (type) {
            case 'image/png':
            case 'image/jpeg':
            case 'image/jpg':
              return <PhotoIcon />;
            case 'video/mp4':
              return <MovieIcon />;
            default:
              return <UnknownIcon />;
          }
        })()}
      </ListItemIcon>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        {(() => {
          switch (status) {
            case 'pending':
              return <UploadIcon />;
            case 'success':
              return <CheckIcon />;
            case 'error':
              return <CrossIcon />;
            default:
              return <UnknownIcon />;
          }
        })()}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

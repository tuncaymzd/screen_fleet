import React, { useState, useRef } from 'react';

import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

import ResourcesList from './ResourcesList';
import FileUpload from './FileUpload';
import FileDropZone from './FileDropZone';
import { useAppContext } from '../../AppContext';

export default () => {
  const { editMode } = useAppContext();
  const id = useRef(1);
  const [files, setFiles] = useState([]);
  const onFilesReceived = (acceptedFiles) => {
    _.forEach(acceptedFiles, (acceptedFile) => {
      const newFiles = _.clone(files);
      const thisId = id.current;
      id.current += 1;
      newFiles.push({
        id: thisId,
        name: acceptedFile.name,
        type: acceptedFile.type,
        file: acceptedFile,
        status: 'pending',
      });
      setFiles(newFiles);
    });
  };

  return (
    <Grid container>
      <Grid item xs={editMode ? 6 : 12}>
        <ResourcesList />
      </Grid>
      <Grid item xs={6} hidden={!editMode}>
        <FileDropZone onFilesReceived={onFilesReceived} />
        <List>
          {_.map(files, file => (
            <FileUpload key={file.id} {...file} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

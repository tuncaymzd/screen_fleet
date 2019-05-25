import React from 'react';

import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import RootRef from '@material-ui/core/RootRef';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(2, 2),
    padding: theme.spacing(3, 2),
  },
}));

export default ({ onFilesReceived }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: onFilesReceived });
  const { ref, ...rootProps } = getRootProps();

  const styles = useStyles();

  return (
    <RootRef rootRef={ref}>
      <Paper {...rootProps} className={styles.paper}>
        <input {...getInputProps()} />
        <p>
          {
          isDragActive
            ? <p>Drop the files here ...</p>
            : <p>Drag and drop some files here, or click to select files</p>
          }
        </p>
      </Paper>
    </RootRef>
  );
};

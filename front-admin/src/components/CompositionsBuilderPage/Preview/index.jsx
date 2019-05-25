import React, { useEffect, useRef } from 'react';

import AspectRatio from 'js-aspect-ratio';
import { ResizeSensor } from 'css-element-queries';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ModuleNode from './ModuleNode';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 2),
  },
}));

export default ({ tree }) => {
  const ref = useRef();
  const classes = useStyles();

  const aspectRatio = new AspectRatio(16, 9);

  useEffect(() => {
    new ResizeSensor(ref.current, () => {
      ref.current.style.height = `${aspectRatio.getHeight(ref.current.offsetWidth)}px`;
    });
  }, [ref.current, aspectRatio]);

  return (
    <Paper ref={ref} className={classes.root}>
      <ModuleNode module={tree} />
    </Paper>
  );
};

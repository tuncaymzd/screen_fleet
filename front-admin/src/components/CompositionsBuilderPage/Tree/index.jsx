import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ModuleNode from './ModuleNode';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 2),
    padding: theme.spacing(3, 2),
  },
}));

export default ({ tree, setTree }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component="h2">COMPOSITION TREE</Typography>
      <List component="nav">
        <ModuleNode module={tree} setModule={setTree} level={0} />
      </List>
    </Paper>
  );
};

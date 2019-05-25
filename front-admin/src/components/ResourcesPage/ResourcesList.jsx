import React, { useEffect } from 'react';

import _ from 'lodash';
import { makeStyles, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';

import Paper from '@material-ui/core/Paper';
import { useAppContext } from '../../AppContext';
import ResourceListItem from './ResourceListItem';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 2),
    padding: theme.spacing(3, 2),
  },
}));

export default () => {
  const { resources, fetchResources } = useAppContext();

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography component="h2">RESOURCES</Typography>
        <List>
          {_.map(resources, (resource, i) => (
            <ResourceListItem key={i} {...resource} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

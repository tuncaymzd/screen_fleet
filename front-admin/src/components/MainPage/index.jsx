import React from 'react';

import Grid from '@material-ui/core/Grid';

import CompositionList from './CompositionsList';
import TvsList from './TvsList';

// noinspection RequiredAttributes
export default () => (
  <Grid container>
    <Grid item xs={6}>
      <CompositionList />
    </Grid>
    <Grid item xs={6}>
      <TvsList />
    </Grid>
  </Grid>
);

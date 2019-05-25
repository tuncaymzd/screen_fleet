import React from 'react';

import _ from 'lodash';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import routes from './routes';

export default () => (
  <Container>
    {_.map(routes, (e, i) => (
      <Route key={i} exact path={e.link} component={e.component} />
    ))}
  </Container>
);

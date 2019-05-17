import React, { useEffect, useState } from 'react';

import _ from 'lodash';
import Grid from '@material-ui/core/Grid';

import { useAppContext } from '../../AppContext';
import Preview from './Preview';
import Tree from './Tree';

export default ({ match }) => {
  const {
    editMode, compositions, fetchCompositions, editComposition,
  } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [tree, setTree] = useState();

  useEffect(() => {
    fetchCompositions();
  }, []);

  useEffect(() => {
    const composition = _.find(compositions, ({ id }) => id === match.params.id);
    if (composition) {
      setLoading(false);
      setTree(composition.moduleTree);
    } else {
      setLoading(undefined);
    }
  }, [compositions]);

  // eslint-disable-next-line no-underscore-dangle
  const _setTree = (newTree) => {
    const composition = _.find(compositions, ({ id }) => id === match.params.id);
    if (composition && tree !== newTree) {
      setTree(newTree);
      editComposition(composition.id, composition.name, newTree);
    }
  };

  return (
    <Grid container>
      {loading === undefined ? 'Composition not found' : (
        <>
          <Grid item xs={editMode ? 8 : 12}>
            {loading === true ? 'loading ...' : <Preview tree={tree} />}
          </Grid>
          <Grid item xs={4} hidden={!editMode}>
            {loading === true ? 'loading ...' : <Tree tree={tree} setTree={_setTree} />}
          </Grid>
        </>
      )}
    </Grid>
  );
};

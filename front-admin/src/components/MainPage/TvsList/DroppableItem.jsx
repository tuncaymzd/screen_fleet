import React from 'react';

import { DropTarget } from 'react-dnd';
import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  item: {
    backgroundColor: theme.palette.grey['200'],
  },
}));

// noinspection RequiredAttributes
export default DropTarget(
  'COMPOSITION',
  {
    drop: ({ id, name }) => ({ id, name }),
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }),
)(({
  connectDropTarget, isOver, name, composition,
}) => {
  const styles = useStyles();

  return connectDropTarget(
    <div>
      <ListItem className={isOver ? styles.item : undefined}>
        <ListItemText>
          {name}
          {composition ? ` : ${composition.name}` : ''}
        </ListItemText>
      </ListItem>
    </div>,
  );
});

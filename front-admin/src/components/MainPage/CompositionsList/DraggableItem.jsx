import React from 'react';

import { DragSource } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  item: {
    '&:hover': {
      backgroundColor: theme.palette.grey['200'],
    },
  },
}));

// noinspection RequiredAttributes
export default DragSource(
  'COMPOSITION',
  {
    beginDrag: ({ id, name }) => ({ id, name }),
    endDrag: ({ editTv }, monitor) => {
      if (!monitor.didDrop()) return;

      const item = monitor.getItem();
      const result = monitor.getDropResult();

      editTv(result.id, result.name, item.id);
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(({ connectDragSource, name }) => {
  const styles = useStyles();
  return connectDragSource(
    <div>
      <ListItem
        className={styles.item}
      >
        <ListItemText primary={name} />
      </ListItem>
    </div>,
  );
});

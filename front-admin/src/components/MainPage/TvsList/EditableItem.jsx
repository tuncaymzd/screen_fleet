import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

// noinspection RequiredAttributes
export default ({
  name, id, onClick, isChecked,
}) => (
  <ListItem
    role={undefined}
    button
    onClick={onClick}
  >
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={isChecked}
        tabIndex={-1}
        disableRipple
      />
    </ListItemIcon>
    <ListItemText primary={name} />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="Edit">
        <EditIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

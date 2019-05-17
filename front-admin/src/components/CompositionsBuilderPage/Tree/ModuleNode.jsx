import React, { useState } from 'react';

import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';

import Modal from './Modal';
import ModuleNodeIcon from './ModuleNodeIcon';

const useStyles = level => makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing.unit * 4 * level + theme.spacing.unit * 2,
  },
}));

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const ModuleNode = ({ module, setModule, level }) => {
  const [collapseOpened, setCollapseOpened] = useState(true);
  const [modalOpened, setModalOpened] = useState(false);

  const classes = useStyles(level)();

  const newSetModule = index => (newModule) => {
    const newTree = _.cloneDeep(module);
    newTree.children[index] = newModule;
    setModule(newTree);
  };

  const { type, parameters, children } = module || {};

  const handleModuleChange = ({ type: newType, parameters: newParameters }) => {
    let newChildren;
    if (newType === 'split') {
      newChildren = _.slice(_.cloneDeep(children || []), 0, 2);
    } else if (newType === 'slide') {
      newChildren = _.slice(_.cloneDeep(children || []), 0, newParameters.nb);
    }
    setModule({ type: newType, parameters: newParameters, children: newChildren });
    setModalOpened(false);
  };

  // noinspection RequiredAttributes
  return (
    <>
      <ListItem className={classes.root}>
        <ListItemIcon>
          <ModuleNodeIcon type={type || 'unknown'} />
        </ListItemIcon>
        <ListItemText primary={capitalize(type || 'unknown')} />
        <ListItemSecondaryAction>
          {(() => {
            if (children) {
              // noinspection RequiredAttributes
              return (
                <IconButton aria-label="Edit" onClick={() => setCollapseOpened(!collapseOpened)}>
                  {collapseOpened ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              );
            }
            return undefined;
          })()}
          <IconButton edge="end" aria-label="Edit" onClick={() => setModalOpened(true)}>
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {(() => {
        if (children) {
          return (
            <Collapse in={collapseOpened} timeout="auto">
              <List component="div" disablePadding>
                {_.map(_.range(parameters.nb || 2), i => (
                  <ModuleNode module={children[i]} setModule={newSetModule(i)} level={level + 1} />
                ))}
              </List>
            </Collapse>
          );
        }
        return undefined;
      })()}
      <Modal
        opened={modalOpened}
        close={() => setModalOpened(false)}
        onAddClick={handleModuleChange}
      />
    </>
  );
};

export default ModuleNode;

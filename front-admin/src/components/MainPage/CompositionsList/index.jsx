import React, { useEffect, useState } from 'react';

import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Modal from './Modal';
import EditableItem from './EditableItem';
import DraggableItem from './DraggableItem';
import useCheckedList from '../useCheckedList';
import { useAppContext } from '../../../AppContext';
import Header from '../Header';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    margin: theme.spacing(2, 2),
    padding: theme.spacing(3, 2),
  },
}));

export default () => {
  const {
    compositions, addComposition, removeComposition, editMode, fetchCompositions, editTv,
  } = useAppContext();

  const [modalOpened, setModalOpened] = useState(false);
  const { checkedList, setCheckedList, handleToggle } = useCheckedList();

  useEffect(() => {
    fetchCompositions();
  }, []);

  const classes = useStyles();

  const onCompositionAddClick = ({ name }) => {
    addComposition(name);
    setModalOpened(false);
  };

  const onModalOpenClick = () => {
    setModalOpened(true);
  };

  const onDeleteButtonClick = () => {
    _.forEach(checkedList, id => removeComposition(id));
    setCheckedList([]);
  };

  // noinspection RequiredAttributes
  return (
    <div>
      <Paper className={classes.root}>
        <Header
          title="COMPOSITIONS"
          onAddClick={onModalOpenClick}
          onDeleteClick={onDeleteButtonClick}
          deleteButtonHidden={!editMode}
          deleteButtonDisabled={checkedList.length === 0}
        />
        <List>
          {_.map(compositions, (composition) => {
            if (editMode) {
              return (
                <EditableItem
                  key={composition.id}
                  id={composition.id}
                  name={composition.name}
                  onClick={handleToggle(composition)}
                  isChecked={_.indexOf(checkedList, composition.id) !== -1}
                />
              );
            }
            return (
              <DraggableItem
                key={composition.id}
                id={composition.id}
                name={composition.name}
                editTv={editTv}
              />
            );
          })}
        </List>
        <Modal
          opened={modalOpened}
          // eslint-disable-next-line react/jsx-no-bind
          close={setModalOpened.bind(setModalOpened, false)}
          onAddClick={onCompositionAddClick}
        />
      </Paper>
    </div>
  );
};

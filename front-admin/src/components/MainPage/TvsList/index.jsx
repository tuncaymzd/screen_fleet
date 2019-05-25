import React, { useEffect, useState } from 'react';

import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import DroppableItem from './DroppableItem';
import EditableItem from './EditableItem';
import Modal from './Modal';
import { useAppContext } from '../../../AppContext';
import useCheckedList from '../useCheckedList';
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
    tvs, compositions, editMode, fetchTvs, addTv, removeTv,
  } = useAppContext();

  const [modalOpened, setModalOpened] = useState(false);
  const { checkedList, setCheckedList, handleToggle } = useCheckedList();

  useEffect(() => {
    fetchTvs();
  }, []);

  const classes = useStyles();

  const onTvAddClick = ({ name, compositionId }) => {
    addTv(name, compositionId);
    setModalOpened(false);
  };

  const onModalOpenClick = () => {
    setModalOpened(true);
  };

  const onDeleteButtonClick = () => {
    _.forEach(checkedList, id => removeTv(id));
    setCheckedList([]);
  };

  // noinspection RequiredAttributes
  return (
    <div>
      <Paper className={classes.root}>
        <Header
          title="TVS"
          onAddClick={onModalOpenClick}
          onDeleteClick={onDeleteButtonClick}
          deleteButtonHidden={!editMode}
          deleteButtonDisabled={checkedList.length === 0}
        />
        <List>
          {_.map(tvs, (tv) => {
            if (editMode) {
              return (
                <EditableItem
                  key={tv.id}
                  name={tv.name}
                  onClick={handleToggle(tv)}
                  isChecked={_.indexOf(checkedList, tv.id) !== -1}
                />
              );
            }
            return (
              <DroppableItem
                key={tv.id}
                id={tv.id}
                name={tv.name}
                composition={_.find(compositions, ({ id }) => tv.compositionId === id)}
              />
            );
          })}
        </List>
        <Modal
          opened={modalOpened}
          // eslint-disable-next-line react/jsx-no-bind
          close={setModalOpened.bind(setModalOpened, false)}
          onAddClick={onTvAddClick}
          compositions={compositions}
        />
      </Paper>
    </div>
  );
};

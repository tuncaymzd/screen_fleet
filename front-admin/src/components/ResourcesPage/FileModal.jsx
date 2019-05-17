import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default ({
  opened, close, name, type, url,
}) => {
  const classes = useStyles();

  // noinspection RequiredAttributes
  return (
    <Modal
      aria-labelledby="modal-add-tv"
      aria-describedby="add-a-new-tv"
      open={opened}
      onClose={close}
    >
      <div className={classes.modal}>
        {(() => {
          if (type === 'picture') return <img alt={name} src={url} />;
          return <video width="240" controls><source src={url} type="video/mp4" /></video>;
        })()}
      </div>
    </Modal>
  );
};

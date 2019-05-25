import React, { useState } from 'react';

import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default ({
  opened, close, onAddClick, compositions,
}) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [compositionId, setCompositionId] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCompositionIdChange = (event) => {
    setCompositionId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddClick({ name, compositionId: compositionId === '' ? undefined : compositionId });
    setName('');
    setCompositionId('');
  };

  // noinspection RequiredAttributes
  return (
    <Modal
      aria-labelledby="modal-add-tv"
      aria-describedby="add-a-new-tv"
      open={opened}
      onClose={close}
    >
      <div className={classes.modal}>
        <Typography component="h2" variant="h5">
          Add a new TV
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="nameInput"
            name="name"
            label="Name"
            value={name}
            onChange={handleNameChange}
            margin="normal"
            required
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel htmlFor="compositionIdInput">Composition</InputLabel>
            <Select
              value={compositionId}
              onChange={handleCompositionIdChange}
              inputProps={{
                id: 'compositionIdInput',
                name: 'compositionId',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {_.map(compositions, composition => (
                <MenuItem key={composition.id} value={composition.id}>
                  {composition.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add a composition
          </Button>
        </form>
      </div>
    </Modal>
  );
};

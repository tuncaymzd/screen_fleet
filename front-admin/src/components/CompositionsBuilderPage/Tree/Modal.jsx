import React, { useState } from 'react';

import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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
  opened, close, onAddClick, type: initialType, parameters: initialParameters,
}) => {
  const classes = useStyles();

  const [type, setType] = useState(initialType);
  const [parameters, setParameters] = useState(initialParameters || {});

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newParameters = {
      url: _.includes(['picture', 'video'], type) ? parameters.url : undefined,
      nb: type === 'slide' ? parameters.nb : undefined,
      direction: type === 'split' ? parameters.direction : undefined,
    };
    onAddClick({ type, parameters: newParameters });
  };

  let formParameters;

  // eslint-disable-next-line default-case
  switch (type) {
    case 'picture':
    case 'video': {
      formParameters = (
        <>
          <TextField
            id="urlInput"
            name="url"
            label="URL"
            value={parameters.url}
            onChange={(event) => {
              setParameters({
                ..._.clone(parameters),
                url: event.target.value,
              });
            }}
            margin="normal"
            required
            fullWidth
          />
        </>
      );
      break;
    }
    case 'split': {
      formParameters = (
        <>
          <FormControl fullWidth>
            <InputLabel htmlFor="compositionIdInput">Direction</InputLabel>
            <Select
              value={parameters.direction}
              onChange={(event) => {
                setParameters({
                  ..._.clone(parameters),
                  direction: event.target.value,
                });
              }}
              inputProps={{
                id: 'directionInput',
                name: 'direction',
              }}
            >
              <MenuItem value="horizontal">
                Horizontal
              </MenuItem>
              <MenuItem value="vertical">
                Vertical
              </MenuItem>
            </Select>
          </FormControl>
        </>
      );
      break;
    }
    case 'slide': {
      formParameters = (
        <>
          <TextField
            id="nbInput"
            name="nb"
            label="Children number"
            type="number"
            value={parameters.nb}
            onChange={(event) => {
              setParameters({
                ..._.clone(parameters),
                nb: event.target.value,
              });
            }}
            margin="normal"
            required
            fullWidth
          />
        </>
      );
      break;
    }
  }

  // noinspection RequiredAttributes
  return (
    <Modal
      aria-labelledby="modal-set-module"
      aria-describedby="edit-a-module"
      open={opened}
      onClose={close}
    >
      <div className={classes.modal}>
        <Typography component="h2" variant="h5">
          Edit a module
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel htmlFor="compositionIdInput">Composition</InputLabel>
            <Select
              value={type}
              onChange={handleTypeChange}
              inputProps={{
                id: 'typeInput',
                name: 'type',
              }}
            >
              <MenuItem value="picture">
                Picture
              </MenuItem>
              <MenuItem value="video">
                Video
              </MenuItem>
              <MenuItem value="split">
                Split
              </MenuItem>
              <MenuItem value="slide">
                Slide
              </MenuItem>
            </Select>
          </FormControl>
          {formParameters}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit the module
          </Button>
        </form>
      </div>
    </Modal>
  );
};

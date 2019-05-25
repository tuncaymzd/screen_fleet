import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    margin: theme.spacing(2, 2),
    padding: theme.spacing(3, 2),
  },
  popper: {
    padding: theme.spacing(2),
  },
}));

export default ({
  title, onAddClick, onDeleteClick, deleteButtonHidden, deleteButtonDisabled,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : null;

  const handlePopperToggleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onDeleteConfirmButtonClick = () => {
    setAnchorEl(null);
    onDeleteClick();
  };

  // noinspection RequiredAttributes
  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Typography component="h2">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <div hidden={deleteButtonHidden}>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={handlePopperToggleClick}
                disabled={deleteButtonDisabled}
              >
                Delete
              </Button>
              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper className={classes.popper}>
                      <Typography>{'Are you sure ? It can\'t be undone.'}</Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={onDeleteConfirmButtonClick}
                      >
                        Yes, delete !
                      </Button>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Grid>
          </div>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onAddClick}
            >
                Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

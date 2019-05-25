import React, { useState } from 'react';

import _ from 'lodash';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import routes from '../routes';
import { useAppContext } from '../AppContext';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toggleEditMode: {
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
}));

export default () => {
  const { editMode, toggleEditMode } = useAppContext();
  const [menuOpened, setMenuOpened] = useState(false);

  const classes = useStyles();

  // noinspection RequiredAttributes
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Screen Fleet
            </Typography>
            <div className={classes.toggleEditMode}>
              <FormGroup row>
                <FormControlLabel
                  control={(
                    <Switch
                      checked={editMode}
                      onChange={toggleEditMode}
                      value="editModeSwitch"
                      color="primary"
                    />
                  )}
                  label="Toggle Edit Mode"
                />
              </FormGroup>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        open={menuOpened}
        onClose={() => setMenuOpened(false)}
      >
        <div>
          <IconButton onClick={() => setMenuOpened(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuList>
          {_.map(routes, ({ link, name, icon: Icon }, i) => (
            <div key={i}>
              <Route exact path={link}>
                {({ match }) => (
                  <MenuItem
                    button
                    selected={!!match}
                    component={Link}
                    to={link}
                    onClick={() => setMenuOpened(false)}
                  >
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <Typography>{name}</Typography>
                  </MenuItem>
                )}
              </Route>
            </div>
          ))}
        </MenuList>
      </Drawer>
    </>
  );
};

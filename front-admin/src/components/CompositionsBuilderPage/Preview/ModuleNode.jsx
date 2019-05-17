import React from 'react';

import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Slider from './Slider';

const useStyles = makeStyles(theme => ({
  video: {
    width: '100%',
    height: '100%',
  },
  picture: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  split: {
    width: '100%',
    height: '100%',
  },
  splitHorizontal: {
    width: '100%',
    height: '50%',
  },
  splitVertical: {
    width: '50%',
    height: '100%',
  },
}));

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const ModuleNode = ({ module }) => {
  const classes = useStyles();

  if (module) {
    const { type, parameters, children } = module;

    switch (type) {
      case 'picture':
        return (
          <div className={classes.picture} style={{ backgroundImage: `url(${parameters.url})` }} />
        );
      case 'video':
        return (
          <video className={classes.video}>
            <source src={parameters.url} type="video/mp4" />
          </video>
        );
      case 'split':
        return (
          <Grid container className={classes.split}>
            <Grid
              item
              xs={parameters.direction === 'vertical' ? 6 : 12}
              className={classes[`split${capitalize(parameters.direction)}`]}
            >
              <ModuleNode module={children[0]} />
            </Grid>
            <Grid
              item
              xs={parameters.direction === 'vertical' ? 6 : 12}
              className={classes[`split${capitalize(parameters.direction)}`]}
            >
              <ModuleNode module={children[1]} />
            </Grid>
          </Grid>
        );
      case 'slide':
        return (
          <div className={classes.slide}>
            <Slider>
              {_.map(_.range(parameters.nb || 0), (i) => (
                <div key={i} className={classes.slide}>
                  <ModuleNode module={children[i]} />
                </div>
              ))}
            </Slider>
          </div>
        );
      default:
        return (
          <p>Undefined</p>
        );
    }
  } else {
    return (
      <p>Undefined</p>
    );
  }
};

export default ModuleNode;

import React, { useEffect, useState } from 'react';

import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  button: {
    height: '100%',
    width: '35px',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transitionDuration: '50ms',
    '&:hover': {
      backgroundColor: 'darkgrey',
    },
    '& > i': {
      border: 'solid white',
      borderWidth: '0 3px 3px 0',
      display: 'inline-block',
      padding: '3px',
      '&.left': {
        transform: 'rotate(135deg)',
      },
      '&.right': {
        transform: 'rotate(-45deg)',
      },
    },
  },
}));

export default ({ children, autoplay = true, delay = 5000 }) => {
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const styles = useStyles();

  const incrementIndex = () => {
    if (displayedIndex >= children.length - 1) {
      setDisplayedIndex(0);
    } else {
      setDisplayedIndex(displayedIndex + 1);
    }
  };

  const decrementIndex = () => {
    if (displayedIndex <= 0) {
      setDisplayedIndex(children.length - 1);
    } else {
      setDisplayedIndex(displayedIndex - 1);
    }
  };

  useEffect(() => {
    if (autoplay) {
      const t = setTimeout(() => {
        incrementIndex();
      }, delay);
      return () => {
        clearTimeout(t);
      };
    }
  }, [displayedIndex, autoplay, delay]);

  return (
    <div className={styles.root}>
      <div className={styles.button} onClick={decrementIndex}>
        <i className="left" />
      </div>
      {_.map(children, (child, i) => (
        <div key={i} className={styles.container} hidden={displayedIndex !== i}>
          {child}
        </div>
      ))}
      <div className={styles.button} onClick={incrementIndex}>
        <i className="right" />
      </div>
    </div>
  );
};

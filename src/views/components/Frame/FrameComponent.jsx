import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './FrameComponentStyles';

const FrameComponent = ({ classes, children }) => {
  return (
    <div className={classes.wrapper}>
      { children }
    </div>
  );
};

const { object, array } = PropTypes;
FrameComponent.propTypes = {
  classes: object.isRequired,
  children: array.isRequired
};

export default withStyles(styles)(FrameComponent);
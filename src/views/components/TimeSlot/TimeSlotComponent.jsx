import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import BufferedPaper from '../BufferedPaper';
import styles from './TimeSlotStyles';

const TimeSlotComponent = ({ classes, hour, am, showModal, reserved, reservation }) => {
  return (
    <div className={ classes.root } onClick={ () => showModal({ hour, am, ...reservation }) }>
      <BufferedPaper background={ reserved && 'red' }>
        <span>{ `${hour}:00` }</span>
        <span>{ am ? 'AM' : 'PM' }</span>
      </BufferedPaper>
    </div>
  );
};

const { object, string, bool, func } = PropTypes;
TimeSlotComponent.propTypes = {
  classes: object.isRequired,
  hour: string.isRequired,
  am: bool,
  showModal: func.isRequired,
  reserved: bool,
  reservation: object.isRequired
};

export default withStyles(styles)(TimeSlotComponent);
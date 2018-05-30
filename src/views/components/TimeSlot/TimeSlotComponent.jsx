import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import BufferedPaper from '../BufferedPaper';
import styles from './TimeSlotStyles';

const TimeSlotComponent = ({ classes, showModal, reservation }) => {
  return (
    <div className={ classes.root } onClick={ () => showModal({ ...reservation }) }>
      <BufferedPaper background={ reservation.reserved && 'red' }>
        <span>{ `${ reservation.hour }:00` }</span>
        <span>{ reservation.am ? 'AM' : 'PM' }</span>
      </BufferedPaper>
    </div>
  );
};

const { object, string, bool, func } = PropTypes;
TimeSlotComponent.propTypes = {
  classes: object.isRequired,
  showModal: func.isRequired,
  reservation: object.isRequired
};

export default withStyles(styles)(TimeSlotComponent);
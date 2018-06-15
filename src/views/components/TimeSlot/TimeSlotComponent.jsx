import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BufferedPaper from '../BufferedPaper';
import styles from './TimeSlotStyles';

const TimeSlotComponent = ({ classes, showModal, reservation, align }) => {
  return (
    <div className={ classes.root } onClick={ () => showModal({ ...reservation }) }>
      <BufferedPaper background={ reservation.reserved && 'red' } align={ align }>
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
  reservation: object.isRequired,
  align: string
};

export default withStyles(styles)(TimeSlotComponent);
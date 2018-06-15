import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TimeSlot from '../TimeSlot';
import ReservationDialog from '../../containers/ReservationDialog';

const SlotListComponent = ({ slots, modalOpen, showModal, hideModal, onChange, reserveSlot }) => {
  return (
    <Grid container spacing={16}>
      {
        slots.map(slot => {
          return (
            <Grid item xs={12} sm={4} key={ `${slot.hour}_${slot.am ? 'am' : 'pm'}` }>
              <TimeSlot 
                showModal={ showModal } 
                reservation={ slot } />
            </Grid>
          )
        })
      }
      <ReservationDialog modalOpen={ modalOpen} hideModal={ hideModal } />
    </Grid>
  );
};

const { array, bool, func } = PropTypes;
SlotListComponent.propTypes = {
  slots: array.isRequired,
  modalOpen: bool.isRequired,
  showModal: func.isRequired,
  hideModal: func.isRequired
};

export default SlotListComponent;
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import BufferedPaper from '../BufferedPaper';
import TimeSlot from '../TimeSlot';
import ReservationDialog from '../../containers/ReservationDialog';

const SlotListComponent = ({ slots, modalOpen, showModal, hideModal, onChange, reserveSlot }) => {
  return (
    <Grid container spacing={16}>
      <Grid item sm={2}></Grid>

      <Grid item xs={12} sm={4}>
        <Grid container direction='column' spacing={16}>
          {
            _.filter(slots, 'am').map(slot => {
              return (
                <Grid item xs={12} key={`${slot.hour}_${slot.am ? 'am' : 'pm'}`}>
                  <TimeSlot
                    align='center'
                    showModal={showModal}
                    reservation={slot} />
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <Grid container direction='column' spacing={16}>
          {
            _.filter(slots, ['am', false]).map(slot => {
              return (
                <Grid item xs={12} key={`${slot.hour}_${slot.am ? 'am' : 'pm'}`}>
                  <TimeSlot
                    align='center'
                    showModal={showModal}
                    reservation={slot} />
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
      
      <Grid item sm={2}></Grid>
      <ReservationDialog modalOpen={modalOpen} hideModal={hideModal} />
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
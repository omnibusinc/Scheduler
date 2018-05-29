import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TimeSlot from '../TimeSlot';
import ReservationDialog from '../../containers/ReservationDialog';

const SlotListComponent = ({ slots, modalOpen, showModal, hideModal, onChange, reserveSlot }) => {
  const { am, pm } = slots;
  return (
    <Grid container spacing={16}>
      {
        Object.keys(am).map(key => {
          return (
            <Grid item xs={12} sm={4} key={ `${key}_am` }>
              <TimeSlot 
                hour={ key } 
                showModal={ showModal } 
                reserved={ am[key].reserved }
                reservation={ am[key] } 
                am />
            </Grid>
          )
        })
      }
      {
        Object.keys(pm).map(key => {
          return (
            <Grid item xs={12} sm={4} key={ `${key}_pm` }>
              <TimeSlot 
                hour={ key } 
                showModal={ showModal } 
                reserved={ pm[key].reserved }
                reservation={ pm[key] } />
            </Grid>
          )
        })
      }
      <ReservationDialog modalOpen={ modalOpen} hideModal={ hideModal } />
    </Grid>
  );
};

const { object, bool, func } = PropTypes;
SlotListComponent.propTypes = {
  slots: object.isRequired,
  modalOpen: bool.isRequired,
  showModal: func.isRequired,
  hideModal: func.isRequired
};

export default SlotListComponent;
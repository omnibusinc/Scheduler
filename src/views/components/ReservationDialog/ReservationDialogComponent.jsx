import React from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const ReservationDialogComponent = ({ modalOpen, selectedSlot, reserveSlot, hideModal, onChange }) => {
  return (
    <Dialog
        open={modalOpen}
        onClose={hideModal}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Reservation</DialogTitle>
        <DialogContent>
          {
            modalOpen && selectedSlot && 
            <DialogContentText>
              To Reserve the { selectedSlot.hour }:00 { selectedSlot.am ? 'AM' : 'PM' } slot, submit your name and phone number below.
            </DialogContentText>
          }
          <TextField 
            margin="dense" 
            label="Name" 
            type="text"
            value={ selectedSlot.name || '' }
            onChange={ (e) => onChange('name', e ) }
            fullWidth 
            autoFocus />
          <TextField 
            margin="dense" 
            label="Phone" 
            type="text" 
            onChange={ (e) => onChange('phone', e ) }
            value={ selectedSlot.phone || '' }
            fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={ hideModal} color="primary">
            Cancel
          </Button>
          <Button onClick={ () => reserveSlot(selectedSlot) } color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  );
};

const { object, bool, func } = PropTypes;
ReservationDialogComponent.propTypes = {
  modalOpen: bool.isRequired,
  hideModal: func.isRequired,
  reserveSlot: func.isRequired,
  onChange: func.isRequired,
  selectedSlot: object.isRequired
};

export default ReservationDialogComponent;
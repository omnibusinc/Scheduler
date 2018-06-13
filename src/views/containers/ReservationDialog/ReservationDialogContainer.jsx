import React, { Component } from 'react';
import { connect } from 'react-redux';
import { slotsActions } from '../../../state/slots';
import View from '../../components/ReservationDialog';

class ReservationDialog extends Component {
  reserveSlot(selectedSlot) {
    this.props.add(selectedSlot);
    this.props.hideModal();
  }

  onChange(name, event) {
    const updated = Object.assign({}, this.props.selectedSlot, { [name]: event.target.value });
    this.props.update(updated);
  }

  render() {
    const extendedProps = { 
      reserveSlot: this.reserveSlot.bind(this), 
      onChange: this.onChange.bind(this), 
      ...this.props 
    };
    
    return(
      <View { ...extendedProps } />
    )
  }
}

const mapStateToProps = ({ selectedSlot }) => ({ selectedSlot })

const { add, update } = slotsActions;
const mapDispatchToProps = { add, update };

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDialog);
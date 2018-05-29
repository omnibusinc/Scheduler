import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import View from '../../components/SlotList';
import { slotsActions } from '../../../state/slots';

class SlotList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { modalOpen: false };
  }

  showModal(slot) {
    this.props.select(slot);
    this.setState({ modalOpen: true });
  }

  hideModal() {
    this.setState({ modalOpen: false });
  }

  // reserveSlot(reservation, selectedSlot) {
  //   const data = Object.assign({}, reservation, selectedSlot);
  //   this.props.add(data);
  //   this.hideModal();
  // }

  render() {
    return(
      <View 
        slots={ this.props.slots } 
        modalOpen={ this.state.modalOpen }
        showModal={ this.showModal.bind(this) }
        hideModal={ this.hideModal.bind(this) } />
    );
  }
}

const mapStateToProps = ({ slotReducer }) => {
  return { slots: slotReducer.slots };
};

const { select } = slotsActions;
const mapDispatchToProps = { select };

export default connect(mapStateToProps, mapDispatchToProps)(SlotList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import View from '../../components/SlotList';
import { select } from '../../../state/slots';

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

const mapStateToProps = ({ slots }) => ({ slots });
const mapDispatchToProps = { select };

export default connect(mapStateToProps, mapDispatchToProps)(SlotList);
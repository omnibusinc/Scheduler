import React, { Component } from 'react';
import Header from'./components/Header';
import Frame from './components/Frame';
import Instructions from './components/Instructions';
import SlotList from './containers/SlotList';

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { layout: 'row' };
  }

  toggleLayout(layout) {
    this.setState({ layout });
  }

  render() {
    return(
      <div>
        <Header layout={ this.state.layout } toggleLayout={ this.toggleLayout.bind(this )} />
        <Frame>
          <Instructions />
          <SlotList layout={ this.state.layout } />
        </Frame>
      </div>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import Header from'./components/Header';
import Frame from './components/Frame';
import Instructions from './components/Instructions';
import SlotList from './containers/SlotList';

class Main extends Component {
  render() {
    return(
      <div>
        <Header />
        <Frame>
          <Instructions />
          <SlotList />
        </Frame>
      </div>
    );
  }
}

export default Main;
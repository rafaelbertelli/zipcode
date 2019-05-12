import React, { Component } from 'react';
import Header from '@components/header';
import Map from '@components/map';

import './styles.less';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Map />
      </div>
    );
  }
}

export default Home;

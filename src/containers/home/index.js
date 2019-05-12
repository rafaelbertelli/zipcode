/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Notifications, { notify } from 'react-notify-toast';

import Header from '@components/header';
import Map from '@components/map';
import GoogleMaps from '@components/map/googleMaps';
import { getAddress } from '@services';

import './styles.less';

class Home extends Component {
  state = {
    zipcode: '',
    completeAddress: {},
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({ zipcode: value });
  };

  handleSearch = e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    getAddress(this.state.zipcode)
      .then(res => {
        console.log(res);
        debugger;

        // this.setState({ completeAddress: res })
      })
      .catch(err => notify.show(err.message, 'error', 3000))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="Home">
        <Header
          handleSearch={this.handleSearch}
          handleInput={this.handleInput}
          zipcode={this.state.zipcode}
        />
        <Map completeAddress={this.state.completeAddress}>
          <GoogleMaps isMarkerShown onMarkerClick={this.handleMarkerClick} />
        </Map>
        <Notifications />
      </div>
    );
  }
}

export default Home;

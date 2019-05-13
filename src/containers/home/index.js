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
    showMaps: false,
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
        this.setState({
          completeAddress: res,
          showMaps: true,
        });
      })
      .catch(err => notify.show(err, 'error', 3000))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleClose = () => {
    this.setState({
      showMaps: false,
      zipcode: '',
      completeAddress: {},
    });
  };

  render() {
    const { completeAddress, showMaps } = this.state;

    return (
      <div className="Home">
        <Header
          handleSearch={this.handleSearch}
          handleInput={this.handleInput}
          zipcode={this.state.zipcode}
        />

        <Map completeAddress={completeAddress} showMaps={showMaps} handleClose={this.handleClose}>
          <GoogleMaps isMarkerShown onMarkerClick={this.handleMarkerClick} />
        </Map>

        <Notifications />
      </div>
    );
  }
}

export default Home;

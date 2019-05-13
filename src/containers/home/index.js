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
      .then(res => this.setState({ completeAddress: res }))
      .catch(err => notify.show(err, 'error', 3000))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleClose = () => {
    this.setState({
      zipcode: '',
      completeAddress: {},
    });
  };

  render() {
    const { completeAddress, isLoading } = this.state;
    const { latLng } = completeAddress;

    return (
      <div className="Home">
        <Header
          handleSearch={this.handleSearch}
          handleInput={this.handleInput}
          zipcode={this.state.zipcode}
          isLoading={isLoading}
        />

        {!!latLng && (
          <Map completeAddress={completeAddress} handleClose={this.handleClose}>
            <GoogleMaps latLng={latLng} />
          </Map>
        )}

        <Notifications />
      </div>
    );
  }
}

export default Home;

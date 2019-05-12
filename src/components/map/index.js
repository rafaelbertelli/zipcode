/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import GoogleMaps from './googleMaps';

import './styles.less';

class Map extends PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    // this.delayedShowMarker();
  }

  render() {
    return (
      <div className="MapComponent">
        <div className="close-box">
          <button className="close" />
        </div>
        <div className="superscription">
          <h1>Rua Tunísia</h1>
          <p>Parque Novo Oratório</p>
          <p>Santo André, SP</p>
          <p>09251-100</p>
        </div>
        <div className="map">
          <GoogleMaps isMarkerShown onMarkerClick={this.handleMarkerClick} />
        </div>
      </div>
    );
  }
}

export default Map;

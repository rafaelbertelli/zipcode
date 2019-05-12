import React from 'react';
import GoogleMaps from './googleMaps';

import './styles.less';

const Map = () => {
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
        <GoogleMaps
          isMarkerShown={false}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default Map;

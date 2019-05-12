/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const Map = props => {
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
      <div className="map">{props.children}</div>
    </div>
  );
};

Map.propTypes = {
  children: PropTypes.any,
};

export default Map;

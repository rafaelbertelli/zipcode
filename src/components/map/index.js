import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const Map = props => {
  const { children, completeAddress, handleClose } = props;
  const { address = '', neighborhood = '', city = '', state = '', zip = '' } = completeAddress;

  return (
    <div className="MapComponent">
      <div className="close-box">
        <button className="close" onClick={handleClose} />
      </div>
      <div className="superscription">
        <h1>{address}</h1>
        <p>{neighborhood}</p>
        {!!city && !!state && <p>{`${city}, ${state}`}</p>}
        <p>{zip}</p>
      </div>
      <div className="map">{children}</div>
    </div>
  );
};

Map.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  completeAddress: PropTypes.objectOf(String).isRequired,
};

export default Map;

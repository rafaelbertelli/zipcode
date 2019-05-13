import React from 'react';
import PropTypes from 'prop-types';

import { MapComponent, ButtonClose, SuperScription } from './styled';

const Map = props => {
  const { children, completeAddress, handleClose } = props;
  const { address = '', neighborhood = '', city = '', state = '', zip = '' } = completeAddress;

  return (
    <MapComponent>
      <div>
        <ButtonClose onClick={handleClose} />
      </div>
      <SuperScription>
        <h1>{address}</h1>
        <p>{neighborhood}</p>
        {!!city && !!state && <p>{`${city}, ${state}`}</p>}
        <p>{zip}</p>
      </SuperScription>
      <div className="map">{children}</div>
    </MapComponent>
  );
};

Map.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
  completeAddress: PropTypes.objectOf(String).isRequired,
};

export default Map;

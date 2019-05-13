import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './styles.less';

const Map = props => {
  const { children, completeAddress, showMaps, handleClose } = props;
  const { address = '', neighborhood = '', city = '', state = '', zip = '' } = completeAddress;

  console.log('showMaps', showMaps);

  return (
    <CSSTransition in={showMaps} timeout={150} classNames="alert" unmountOnExit>
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
    </CSSTransition>
  );
};

Map.propTypes = {
  children: PropTypes.node.isRequired,
  showMaps: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  completeAddress: PropTypes.objectOf(String).isRequired,
};

export default Map;

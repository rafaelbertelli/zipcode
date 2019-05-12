import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMaps = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -35.422664976, lng: -71.669663988 }}>
      {props.isMarkerShown && <Marker position={{ lat: -35.422664976, lng: -71.669663988 }} />}
    </GoogleMap>
  ))
);

export default GoogleMaps;

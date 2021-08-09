import React from 'react';
import { Map, ImageOverlay, Marker, Popup } from 'react-leaflet';
import { CRS } from 'leaflet';
import pic from '../../assets/layers/pic-3.svg';

function CRSComponent() {
  return (
    <Map
      style={{ height: '100vh' }}
      center={[200, 200]}
      zoom={1}
      doubleClickZoom={false}
      crs={CRS.Simple}
    >
      <ImageOverlay
        url={pic}
        bounds={[
          [0, 0],
          [400, 400],
        ]}
      />
      <Marker position={[200, 200]}>
        <Popup>Hello world</Popup>
      </Marker>
    </Map>
  );
}

export default CRSComponent;

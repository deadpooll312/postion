import React from 'react';
import { ImageOverlay, Map, Marker, Popup } from 'react-leaflet';
import { CRS } from 'leaflet';

import './index.scss';

import pic from '../../../../assets/layers/pic-3.svg';

const CRSMap = () => {
  return (
    <div className="map-wrapper">
      <Map
        style={{ height: '100%' }}
        center={[230, 50]}
        zoom={1}
        crs={CRS.Simple}
      >
        <ImageOverlay
          url={pic}
          bounds={[
            [0, 0],
            [468.45, 100],
          ]}
        />
      </Map>
    </div>
  );
};

export default CRSMap;

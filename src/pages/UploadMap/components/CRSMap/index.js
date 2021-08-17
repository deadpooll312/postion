import React from 'react';
import { ImageOverlay, Map } from 'react-leaflet';
import { CRS } from 'leaflet';

import './index.scss';

const CRSMap = ({ image }) => {
  return (
    <div className="map-wrapper">
      <Map
        style={{ height: '100%' }}
        center={[230, 50]}
        zoom={1}
        crs={CRS.Simple}
      >
        <ImageOverlay
          url={image}
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

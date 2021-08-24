import React, { useEffect, useState } from 'react';

import pic from '../../assets/layers/pic-2.svg';
import { addMarker, initMap } from '../../helpers/mapHelpers';

const crsData = {
  crsImage: pic,
  bounds: {
    minX: -3.883274806979253,
    minY: -5.23207702306117,
    maxX: 8.339494856048299,
    maxY: 2.088335159944491,
  },
  z: 0.5,
  title: 'crsmap',
};

function CRSComponent() {
  const mapId = 'map';

  const { minX, minY, maxX, maxY } = crsData.bounds;
  const bounds = [
    { lat: minY, lng: minX },
    { lat: maxY, lng: maxX },
  ];

  const point = { lat: 0.15, lng: 0.14 };

  const [map, setMap] = useState();
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!map) setMap(initMap({ mapId, image: crsData.crsImage, bounds }));
  }, []);

  useEffect(() => {
    if (map) {
      setMarker(addMarker({ map, latLng: point }));
    }
  }, [map]);

  return (
    <div className="map-wrapper">
      <div id={mapId} />
    </div>
  );
}

export default CRSComponent;

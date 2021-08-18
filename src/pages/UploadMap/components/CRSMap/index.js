import React, { useEffect, useState } from 'react';

import './index.scss';

import { initMap } from '../../../../helpers/mapHelpers';

const CRSMap = ({ image }) => {
  const mapId = 'map';

  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) setMap(initMap({ mapId, image }));
  }, []);

  return (
    <div className="map-wrapper">
      <div id="map" />
    </div>
  );
};

export default CRSMap;

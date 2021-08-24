import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import pic from '../../assets/layers/pic-2.svg';
import { addMarker, initMap } from '../../helpers/mapHelpers';
import { mockKeepers } from '../../consts/mockData';

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

  const [map, setMap] = useState();

  const setMarkers = () => {
    mockKeepers.forEach((keeper) => {
      const {
        _embedded: {
          tag: { x, y },
        },
      } = keeper;
      addMarker({ map, latLng: { lat: y, lng: x } });
    });
  };

  useEffect(() => {
    if (!map) setMap(initMap({ mapId, image: crsData.crsImage, bounds }));
  }, []);

  useEffect(() => {
    if (map) {
      setMarkers();
    }
  }, [map]);

  return (
    <div className="map-wrapper">
      <div id={mapId} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { owsData: state.ows.owsData };
};

export default connect(mapStateToProps)(CRSComponent);

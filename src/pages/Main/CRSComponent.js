import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import pic from '../../assets/layers/pic-2.svg';
import { addMarker, initMap } from '../../helpers/mapHelpers';
import { getKeepers } from '../../services/ows';

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
  const [data, setData] = React.useState();

  const { minX, minY, maxX, maxY } = crsData.bounds;
  const bounds = [
    { lat: minY, lng: minX },
    { lat: maxY, lng: maxX },
  ];

  const [map, setMap] = useState();

  const setMarkers = (keepers) => {
    keepers.forEach((keeper) => {
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
    if (map && data) {
      setMarkers(data);
    }
  }, [map, data]);

  useEffect(() => {
    const keepersInterval = setInterval(() => {
      getKeepers()
        .then((res) => setData(res?.data?.items))
        .catch((err) => {
          clearInterval(keepersInterval);
          throw err;
        });
    }, 3000);

    return () => clearInterval(keepersInterval);
  }, []);

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

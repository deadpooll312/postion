import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import pic from '../../../../assets/layers/pic-2.svg';
import {
  addLayerGroup,
  createMarker,
  initMap,
  onClickMarker,
} from '../../../../helpers/mapHelpers';
import { getKeepers } from '../../../../services/keepers';

import './index.scss';

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

const ReactElem = () => {
  useEffect(() => {
    console.log('created');
  }, []);
  return (
    <div>
      this is react elem
      <button
        onClick={() => {
          console.log('fadfa');
        }}
      >
        click me
      </button>
    </div>
  );
};

function CRSMap(props) {
  const { handleClickMarker } = props;

  const mapId = 'map';
  const [data, setData] = useState();
  const [markersGroup, setMarkersGroup] = useState();

  const { minX, minY, maxX, maxY } = crsData.bounds;
  const bounds = [
    { lat: minY, lng: minX },
    { lat: maxY, lng: maxX },
  ];

  let keepersInterval;

  const [map, setMap] = useState();

  const setMarkers = (keepers) => {
    const markers = keepers.map((keeper) => {
      const {
        _embedded: {
          tag: { x, y },
        },
      } = keeper;
      const marker = createMarker({ map, latLng: { lat: y, lng: x } });

      marker.on('click', () => {
        handleClickMarker(keeper);
      });
      // onClickMarker({ marker, component: <ReactElem /> });

      return marker;
    });

    setMarkersGroup(addLayerGroup({ map, markers }));
  };

  const requestKeepers = () => {
    getKeepers()
      .then((res) => setData(res?.data?.items))
      .catch((err) => {
        clearInterval(keepersInterval);
        throw err;
      });
  };

  useEffect(() => {
    if (!map) setMap(initMap({ mapId, image: crsData.crsImage, bounds }));
  }, []);

  useEffect(() => {
    if (map && data) {
      markersGroup?.remove();
      setMarkers(data);
    }
  }, [map, data]);

  useEffect(() => {
    requestKeepers();
    keepersInterval = setInterval(requestKeepers, 3000);

    return () => clearInterval(keepersInterval);
  }, []);

  return (
    <div className="map-wrapper">
      <div id={mapId} />
    </div>
  );
}

export default connect()(CRSMap);

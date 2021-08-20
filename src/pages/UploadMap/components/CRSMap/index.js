import React, { useEffect, useState } from 'react';

import './index.scss';

import {
  addMarker,
  addPolyLine,
  initMap,
} from '../../../../helpers/mapHelpers';

import svgImage from '../../../../assets/layers/pic-2.svg';

const CRSMap = ({ image }) => {
  const mapId = 'map';

  const [map, setMap] = useState();
  const [markerA, setMarkerA] = useState();
  const [markerB, setMarkerB] = useState();
  const [pointA, setPointA] = useState([150, 0]);
  const [pointB, setPointB] = useState([150, 100]);
  const [line, setLine] = useState();

  useEffect(() => {
    if (!map) setMap(initMap({ mapId, image }));
    else {
      setMarkerA(
        addMarker({
          map,
          latLng: pointA,
          draggable: true,
          setPosition: setPointA,
        })
      );
      setMarkerB(
        addMarker({
          map,
          latLng: pointB,
          draggable: true,
          setPosition: setPointB,
        })
      );
      setLine(addPolyLine({ map, latLngs: [pointA, pointB] }));
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      line.remove();

      setLine(addPolyLine({ map, latLngs: [pointA, pointB] }));
    }
  }, [pointA, pointB]);

  return (
    <div className="map-wrapper">
      <div id="map" />
    </div>
  );
};

export default CRSMap;

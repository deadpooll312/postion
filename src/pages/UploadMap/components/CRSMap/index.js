import React, { useEffect, useState } from 'react';

import {
  addMarker,
  addPolyLine,
  initMap,
} from '../../../../helpers/mapHelpers';
import { getBounds } from '../../../../helpers/getters';
import { createImage } from '../../../../helpers/imageHelpers';

import './index.scss';

const CRSMap = (props) => {
  const {
    image,
    bounds,
    pointA,
    pointL0,
    pointL1,
    setBounds,
    setPointA,
    setPointL0,
    setPointL1,
  } = props;

  const mapId = 'map';

  const [map, setMap] = useState();

  const [markerA, setMarkerA] = useState();
  const [markerL0, setMarkerL0] = useState();
  const [markerL1, setMarkerL1] = useState();

  const [line, setLine] = useState();

  const handleLoadImage = (img) => {
    setBounds(getBounds(img.width, img.height));
  };

  const initBounds = () => {
    createImage(image, handleLoadImage);
  };

  const initPoints = () => {
    const [{ lat: y0, lng: x0 }, { lat: y1, lng: x1 }] = bounds;
    const midY = (y0 + y1) / 2;
    setPointL0({ lat: midY, lng: x0 });
    setPointL1({ lat: midY, lng: x1 });
  };

  const setLayers = () => {
    setMarkerA(
      addMarker({
        map,
        latLng: pointA,
        draggable: true,
        setPosition: setPointA,
      })
    );
    setMarkerL0(
      addMarker({
        map,
        latLng: pointL0,
        draggable: true,
        setPosition: setPointL0,
      })
    );
    setMarkerL1(
      addMarker({
        map,
        latLng: pointL1,
        draggable: true,
        setPosition: setPointL1,
      })
    );
  };

  useEffect(() => {
    initBounds();
  }, []);

  useEffect(() => {
    if (bounds) {
      initPoints();
      if (!map && bounds) setMap(initMap({ mapId, image, bounds }));
    }
  }, [bounds]);

  useEffect(() => {
    if (map) {
      setLayers();
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      if (line) line.remove();
      setLine(addPolyLine({ map, latLngs: [pointL0, pointL1] }));
    }
  }, [pointL0, pointL1]);

  return (
    <div className="map-wrapper">
      <div id={mapId} />
    </div>
  );
};

export default CRSMap;

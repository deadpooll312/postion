import React, { useRef, useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import { Map, TileLayer, ImageOverlay, GeoJSON } from 'react-leaflet';
import pic from '../../assets/layers/pic-3.svg';

import mapData from './countries.json';

import './index.css';
const position = [52.9435, 62.1415];

function MapComponent() {
  const [color, setColor] = useState(null);
  const leafFletMap = useRef();
  const { mapColor } = useContext(Context);

  useEffect(() => {
    setColor(mapColor);
    console.log(mapColor);
  }, [mapColor]);

  return (
    <>
      <Map
        center={position}
        zoom={17}
        ref={leafFletMap}
        maxZoom={22}
        style={{ height: '100vh' }}
      >
        {color && (
          <GeoJSON
            style={() => {
              return {
                fillColor: color,
                fillOpacity: '0.2',
              };
            }}
            data={mapData.features}
          />
        )}

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          maxNativeZoom={19}
          minZoom={0}
          maxZoom={22}
        />
        <ImageOverlay
          bounds={[
            [52.945020135602356, 62.13703822308163],
            [52.94435100356542, 62.1371616046963],
            [52.94502983309203, 62.1371616046963],
            [52.94427342236987, 62.13705968075375],
          ]}
          url={pic}
        />
      </Map>
    </>
  );
}

export default MapComponent;

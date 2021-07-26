import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
const position = [52.9435, 62.1415];

function MapComponent() {
  return (
    <Map center={position} zoom={13} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}

export default MapComponent;

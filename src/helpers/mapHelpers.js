import L from 'leaflet';

export const initMap = ({ mapId, image, bounds }) => {
  const map = L.map(mapId, {
    crs: L.CRS.Simple,
  });

  L.imageOverlay(image, bounds).addTo(map);

  map.fitBounds(bounds);

  // map.zoomIn(1);

  return map;
};

export const createMarker = ({ latLng, draggable, setPosition }) => {
  const marker = L.marker(latLng, {
    draggable,
  });

  marker.on('dragend', () => {
    setPosition(marker.getLatLng());
  });

  marker.on('move', () => {
    setPosition(marker.getLatLng());
  });

  return marker;
};

export const addMarker = ({ map, latLng, draggable, setPosition }) => {
  return createMarker({ latLng, draggable, setPosition }).addTo(map);
};

export const addPolyLine = ({ map, latLngs }) => {
  const polyLine = L.polyline(latLngs, {
    weight: 2,
    dashArray: '5',
  }).addTo(map);

  return polyLine;
};

export const addLayerGroup = ({ map, markers }) => {
  const layerGroup = L.layerGroup(markers).addTo(map);

  return layerGroup;
};

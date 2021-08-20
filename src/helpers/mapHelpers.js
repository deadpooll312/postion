import L from 'leaflet';

const bounds = [
  [0, 0],
  [468.45, 100],
];

export const initMap = ({ mapId, image }) => {
  const map = L.map(mapId, {
    crs: L.CRS.Simple,
  });

  L.imageOverlay(image, bounds).addTo(map);

  map.fitBounds(bounds);

  return map;
};

export const addMarker = ({ map, latLng, draggable, setPosition }) => {
  const marker = L.marker(latLng, {
    draggable,
  }).addTo(map);

  marker.on('dragend', () => {
    setPosition(marker.getLatLng());
  });

  marker.on('move', () => {
    setPosition(marker.getLatLng());
  });

  return marker;
};

export const addPolyLine = ({ map, latLngs }) => {
  const polyLine = L.polyline(latLngs, {
    weight: 2,
    dashArray: '5',
  }).addTo(map);

  return polyLine;
};

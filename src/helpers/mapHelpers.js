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

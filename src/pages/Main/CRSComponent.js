import React from 'react';
import { Map, ImageOverlay, Marker, Popup } from 'react-leaflet';
import { CRS } from 'leaflet';
import pic from '../../assets/layers/pic-3.svg';

function CRSComponent() {
  return (
    <Map
      style={{ height: '100vh' }}
      center={[200, 200]}
      zoom={1}
      crs={CRS.Simple}
    >
      <ImageOverlay
        url={pic}
        bounds={[
          [0, 0],
          [468.45, 100],
        ]}
      />
      <Marker position={[7, 7]}>
        <Popup>Hello world</Popup>
      </Marker>
    </Map>
  );
}

// response answer:
// {
//   svgWidth: '954px',
//   svgHeight: '4469px',
//   keepers: {
//     x: 0.15,
//     y: 0.14,
//     z:
//   },
//   buildingWidth: 15 // м
// }

// imageOverlayBoundsCalculation(w, h) {
//   return h * 100/w;
// }

// pxCalculation(keepersValue, buildingWidth) {
//   return keepersValue * 100/buildingWidth;
// }

// 1. размер SVG выч. в px
// 2. выч. пропорциональное соотношение реальных размеров svg с imageoverlay (bounds): пример-> 100
// 954 - 100
// 4469 - x
// x = 468.4486373
// 3. расчет пропорции px к метру
// например реальная ширина в 15 метров = 100px bounds (imageoverlay)
// 15м. - 100px
// keepers.x || keepers.y - x ====> x = 15/15 = 1

export default CRSComponent;

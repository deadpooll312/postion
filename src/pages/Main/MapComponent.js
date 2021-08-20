import React, { useRef, useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import {
  Map,
  TileLayer,
  ImageOverlay,
  GeoJSON,
  Polygon,
  Tooltip,
  Marker,
  Popup,
} from 'react-leaflet';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import pic from '../../assets/layers/pic-3.svg';

import mapData from './countries.json';

import './index.css';
import UserDrawer from './UserDrawer';

const { Meta } = Card;

const position = [52.9435, 62.1415];
const multiPolygon = [
  [
    [52.9449917796266, 62.135978937149055],
    [52.9449917796266, 62.136257886886604],
    [52.94502410460489, 62.136263251304634],
    [52.945027337101386, 62.1366173028946],
    [52.94536028294745, 62.13660657405854],
    [52.94536028294745, 62.1365636587143],
    [52.9455477658884, 62.13655829429627],
    [52.9455477658884, 62.13660657405854],
    [52.94557362554062, 62.13660657405854],
    [52.94558009045125, 62.13715910911561],
    [52.945799896838246, 62.13715374469758],
    [52.94580312927678, 62.137448787689216],
    [52.94479136422201, 62.137470245361335],
    [52.9447881317079, 62.137228846549995],
    [52.944917432084836, 62.137228846549995],
    [52.944917432084836, 62.1371752023697],
    [52.945030569597655, 62.13716983795167],
    [52.945030569597655, 62.13714838027955],
    [52.94434850753562, 62.13716983795167],
    [52.94434850753562, 62.137255668640144],
    [52.94427739144092, 62.137255668640144],
    [52.94427739144092, 62.13705182075501],
    [52.945030569597655, 62.13703036308289],
    [52.945027337101386, 62.136987447738655],
    [52.94485924696304, 62.136987447738655],
    [52.944856014453975, 62.137008905410774],
    [52.94463297074545, 62.1370142698288],
    [52.9446232731668, 62.13644027709962],
    [52.944561855118344, 62.13644027709962],
    [52.94455862258706, 62.13617742061616],
    [52.94461680811317, 62.13617205619813],
    [52.94461680811317, 62.135995030403144],
  ],
];

const multiPolygon2 = [
  [52.94541523492811, 62.13526546955109],
  [52.94541523492811, 62.135496139526374],
  [52.9451857291341, 62.135501503944404],
  [52.9451857291341, 62.13527083396912],
];

const multiPolygon3 = [
  [52.94576757243961, 62.13611841201783],
  [52.945764339998426, 62.13639199733735],
  [52.94564473950455, 62.13639199733735],
  [52.94563504215271, 62.13612377643586],
];

function MapComponent() {
  const [color, setColor] = useState(null);
  const [visible, setVisible] = useState(false);
  const leafFletMap = useRef();
  const { mapColor } = useContext(Context);

  useEffect(() => {
    setColor(mapColor);
    console.log(mapColor);
  }, [mapColor]);

  return (
    <>
      <UserDrawer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
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

        <Marker position={[52.94462650569327, 62.13709473609924]}>
          <Popup>
            <Card
              style={{ width: 300, cursor: 'pointer' }}
              bordered={false}
              bodyStyle={{ padding: 8 }}
              onClick={() => {
                setVisible(true);
              }}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                  <span
                    style={{
                      color: '#00A2E8',
                      fontWeight: 900,
                      fontSize: 16,
                    }}
                  >
                    Сергеев Сергей Сергеевич
                  </span>
                }
                description={
                  <>
                    <p
                      className="d-flex-sb"
                      style={{
                        padding: 0,
                        margin: 0,
                        fontSize: 14,
                        lineHeight: '16px',
                        color: '#000000',
                      }}
                    >
                      Табельный номер: <span className="green">№45123345</span>
                    </p>
                    <p
                      className="d-flex-sb"
                      style={{
                        padding: 0,
                        margin: 0,
                        fontSize: 14,
                        lineHeight: '16px',
                        color: '#000000',
                      }}
                    >
                      Должность: <span className="green">Сварщик</span>
                    </p>
                  </>
                }
              />
            </Card>
          </Popup>
        </Marker>

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxNativeZoom={19}
          minZoom={0}
          maxZoom={22}
        />
        <Polygon
          pathOptions={{
            color: 'red',
          }}
          positions={multiPolygon2}
        >
          <Tooltip sticky>Столовая</Tooltip>
        </Polygon>
        <Polygon
          pathOptions={{
            color: 'red',
          }}
          positions={multiPolygon3}
        >
          <Tooltip sticky>Участок дробления</Tooltip>
        </Polygon>

        <Polygon pathOptions={{ color: 'purple' }} positions={multiPolygon}>
          <Tooltip sticky>ЗИиОФ</Tooltip>
        </Polygon>
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

import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Affix, Button } from 'antd';
import { ReactComponent as BookMarkLogo } from '../../assets/icons/bookmark.svg';
import { ReactComponent as StackLogo } from '../../assets/icons/stack.svg';
import { ReactComponent as CameraLogo } from '../../assets/icons/camera.svg';

const position = [52.9435, 62.1415];

function Main() {
  return (
    <>
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
      <Affix
        style={{ position: 'absolute', bottom: 50, left: 50, zIndex: 999 }}
      >
        <Button
          style={{
            fontWeight: 900,
            fontSize: 22,
            lineHeight: 26,
            color: '#fff',
            background: '#D82626',
            display: 'flex',
            border: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            height: 65,
            filter: 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15))',
          }}
          shape='circle'
          onClick={() => {
            console.log(1);
          }}
        >
          SOS
        </Button>
      </Affix>
      <Affix style={{ position: 'absolute', top: 100, right: 50, zIndex: 999 }}>
        <Button
          style={{
            fontWeight: 900,
            fontSize: 22,
            lineHeight: 26,
            color: '#fff',
            background: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            height: 65,
            filter: 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15))',
          }}
          shape='circle'
          onClick={() => {
            console.log(1);
          }}
        >
          <BookMarkLogo />
        </Button>
      </Affix>
      <Affix
        style={{ position: 'absolute', bottom: 130, right: 50, zIndex: 999 }}
      >
        <Button
          style={{
            fontWeight: 900,
            fontSize: 22,
            lineHeight: 26,
            color: '#fff',
            background: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            height: 65,
            filter: 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15))',
          }}
          shape='circle'
          onClick={() => {
            console.log(1);
          }}
        >
          <CameraLogo />
        </Button>
      </Affix>
      <Affix
        style={{ position: 'absolute', bottom: 50, right: 50, zIndex: 999 }}
      >
        <Button
          style={{
            fontWeight: 900,
            fontSize: 22,
            lineHeight: 26,
            color: '#fff',
            background: '#FFFFFF',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 65,
            height: 65,
            filter: 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15))',
          }}
          shape='circle'
          onClick={() => {
            console.log(1);
          }}
        >
          <StackLogo />
        </Button>
      </Affix>
    </>
  );
}

export default Main;

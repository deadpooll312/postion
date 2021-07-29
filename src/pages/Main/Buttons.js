import React from 'react';
import { Affix, Button } from 'antd';
import { ReactComponent as BookMarkLogo } from '../../assets/icons/bookmark.svg';
import { ReactComponent as CameraLogo } from '../../assets/icons/camera.svg';

import SosPopover from './SosPopover';
import StackDrawer from './StackDrawer';

function Buttons({ showBook }) {
  return (
    <>
      <SosPopover />
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
            showBook();
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
      <StackDrawer />
    </>
  );
}

export default Buttons;

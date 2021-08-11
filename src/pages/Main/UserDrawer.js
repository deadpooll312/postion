import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';
import { Affix, Button, Drawer, Divider, Checkbox } from 'antd';
import { ReactComponent as StackLogo } from '../../assets/icons/stack.svg';
import { ReactComponent as SettingWrenchLogo } from '../../assets/icons/interface-setting-wrench.svg';
import { ReactComponent as ToolLogo } from '../../assets/icons/tool.svg';
import { ReactComponent as GridLogo } from '../../assets/icons/grid.svg';
import { ReactComponent as ChangeColorLogo } from '../../assets/icons/color-change.svg';
import { ReactComponent as MapTypeLogo } from '../../assets/icons/map-type.svg';
import { ReactComponent as ElementsLogo } from '../../assets/icons/elements.svg';
import { ReactComponent as UserGrayLogo } from '../../assets/icons/user-gray.svg';
import { ReactComponent as ObjectLogo } from '../../assets/icons/object.svg';
import { ReactComponent as MapLocationLogo } from '../../assets/icons/map-location-logo.svg';
import { ReactComponent as ShoppingBagLogo } from '../../assets/icons/shopping-bag.svg';
import { ReactComponent as PriceTagLogo } from '../../assets/icons/price-tag.svg';
import MapTypes from './MapTypes';

function UserDrawer({ visible, onClose }) {
  //   const [visible, setVisible] = useState(false);
  const { changeMapColor } = useContext(Context);
  const elementsList = [
    {
      text: 'Движение',
      logo: <UserGrayLogo />,
    },
    {
      text: 'Температура',
      logo: <ObjectLogo />,
    },
    {
      text: 'Положение',
      logo: <MapLocationLogo />,
    },
    {
      text: 'Барометр',
      logo: <ShoppingBagLogo />,
    },
    {
      text: 'Температура барометра',
      logo: <PriceTagLogo />,
    },
    {
      text: 'Пульс (браслет)',
      logo: <PriceTagLogo />,
    },
    {
      text: 'Шагомер (браслет)',
      logo: <PriceTagLogo />,
    },
    {
      text: 'Батарея (браслет)',
      logo: <PriceTagLogo />,
    },
  ];

  //   useEffect(() => {
  //     visible
  //   })

  return (
    <>
      <Drawer
        placement='left'
        closable={true}
        onClose={() => {
          onClose();
          //   setVisible(false);
        }}
        visible={visible}
        width={350}
      >
        <div
          style={{
            marginTop: 36,
          }}
        >
          <p className='stack-drawer-title'>Сергеев Сергей Сергеевич</p>
          <p>Табельный номер: №45123345</p>
          <p>должность: Сварщик</p>
          <p>Батарея: Полная</p>
          {/* <div className='logos-wrapper'>
            <ToolLogo />
            <GridLogo />
            <div
              style={{
                position: 'relative',
              }}
            >
              <input
                style={{
                  cursor: 'pointer',
                  opacity: 0,
                  position: 'absolute',
                  width: '100%',
                  minHeight: '100%',
                  zIndex: 0,
                }}
                type='color'
                onChange={(e) => {
                  changeMapColor(e?.target?.value);
                }}
              />
              <ChangeColorLogo
                style={{
                  cursor: 'pointer',
                  zIndex: 999,
                }}
              />
            </div>
          </div> */}
          <Divider />
          {/* <p className='stack-drawer-sub-title'>
            <MapTypeLogo />
            <span>Тип карты</span>
          </p> */}
          <MapTypes />
          <Divider />
          {/* <p className='stack-drawer-sub-title'>
            <ElementsLogo />
            <span>Элементы</span>
          </p> */}
          {elementsList.map((item, idx) => {
            return (
              <div key={idx} className={'element-wrapper'}>
                {item.logo}
                <span>{item.text}</span>
                {/* <Checkbox /> */}
              </div>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}

export default UserDrawer;

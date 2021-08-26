import React, { useState, useContext } from 'react';
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

function StackDrawer() {
  const [visible, setVisible] = useState(false);
  const { changeMapColor } = useContext(Context);
  const elementsList = [
    {
      text: 'Сотрудники',
      logo: <UserGrayLogo />,
    },
    {
      text: 'Подписи объектов',
      logo: <ObjectLogo />,
    },
    {
      text: 'Области',
      logo: <MapLocationLogo />,
    },
    {
      text: 'Инфраструктура',
      logo: <ShoppingBagLogo />,
    },
    {
      text: 'Ярлыки',
      logo: <PriceTagLogo />,
    },
  ];

  return (
    <>
      <Drawer
        placement='right'
        closable={true}
        onClose={() => {
          setVisible(false);
        }}
        visible={visible}
        width={350}
      >
        <div
          style={{
            marginTop: 36,
          }}
        >
          <p className='stack-drawer-title'>Параметры карты</p>
          <p className='stack-drawer-sub-title'>
            <SettingWrenchLogo />
            <span>Инструменты</span>
          </p>
          <div className='logos-wrapper'>
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
          </div>
          <Divider />
          <p className='stack-drawer-sub-title'>
            <MapTypeLogo />
            <span>Тип карты</span>
          </p>
          <MapTypes />
          <Divider />
          <p className='stack-drawer-sub-title'>
            <ElementsLogo />
            <span>Элементы</span>
          </p>
          {elementsList.map((item, idx) => {
            return (
              <div key={idx} className={'element-wrapper'}>
                {item.logo}
                <span>{item.text}</span>
                <Checkbox />
              </div>
            );
          })}
        </div>
      </Drawer>
      <Affix
        style={{ position: 'absolute', bottom: 60, right: 60, zIndex: 999 }}
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
            setVisible(true);
          }}
        >
          <StackLogo />
        </Button>
      </Affix>
    </>
  );
}

export default StackDrawer;

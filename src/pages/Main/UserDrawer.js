import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';
import { Avatar, Drawer, Divider, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { ReactComponent as PlanLogo } from '../../assets/icons/plane.svg';
import { ReactComponent as TemperatureLogo } from '../../assets/icons/temperature.svg';
import { ReactComponent as WarningLogo } from '../../assets/icons/warning-triangle.svg';
import { ReactComponent as BrowserSafariLogo } from '../../assets/icons/browser-safari.svg';

import { ReactComponent as DashboardLogo } from '../../assets/icons/dashboard.svg';
import { ReactComponent as CelsiusLogo } from '../../assets/icons/celsius.svg';
import { ReactComponent as SignalGraphLogo } from '../../assets/icons/signal-graph.svg';
import { ReactComponent as StepsLogo } from '../../assets/icons/steps.svg';
import { ReactComponent as BatteryLogo } from '../../assets/icons/battery.svg';

import IconsGroup from './IconsGroup';

function UserDrawer({ visible, onClose }) {
  //   const [visible, setVisible] = useState(false);
  const { changeMapColor } = useContext(Context);
  const elementsList = [
    {
      text: 'Движение',
      logo: <PlanLogo />,
      value: 'Подвижность',
    },
    {
      text: 'Температура',
      logo: <TemperatureLogo />,
      value: 7,
    },
    {
      text: 'Падение/удар',
      logo: <WarningLogo />,
      value: 'Normal',
    },
    {
      text: 'Положение',
      logo: <BrowserSafariLogo />,
      value: 'YH',
    },
    {
      text: 'Барометр',
      logo: <DashboardLogo />,
      value: -4568,
    },
    {
      text: 'Температура барометра',
      logo: <CelsiusLogo />,
      value: 11,
    },
    {
      text: 'Пульс (браслет)',
      logo: <SignalGraphLogo />,
      value: 82,
    },
    {
      text: 'Шагомер (браслет)',
      logo: <StepsLogo />,
      value: 1222,
    },
    {
      text: 'Батарея (браслет)',
      logo: <BatteryLogo />,
      value: '50%',
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
          <div className='d-flex-center-center'>
            <Avatar size='large' icon={<UserOutlined />} />
          </div>
          <p className='stack-drawer-title mt-20'>Сергеев Сергей Сергеевич</p>
          <p className='d-flex-sb'>
            <span>Табельный номер:</span>
            <span className='green'>№45123345</span>
          </p>
          <p className='d-flex-sb'>
            <span>Должность:</span> <span className='green'>Сварщик</span>
          </p>
          <p className='d-flex-sb'>
            <span>Батарея:</span> <span className='green'>Полная</span>
          </p>
          <Divider />
          <IconsGroup />
          <Divider />
          {elementsList.map((item, idx) => {
            return (
              <div key={idx} className={'data-wrapper'}>
                {item.logo}
                <span className='data-text' style={{ color: '#373737' }}>
                  {item.text}
                </span>
                <span className='data-value green'>{item.value}</span>
              </div>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}

export default UserDrawer;

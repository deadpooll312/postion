import React, { useState } from 'react';
import {
  Avatar,
  Drawer,
  Divider,
  PageHeader,
  DatePicker,
  TimePicker,
  Form,
  Row,
  Col,
} from 'antd';
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
import { ReactComponent as HistoryLogo } from '../../assets/icons/history.svg';

import IconsGroup from './IconsGroup';
import ModalComponent from './ModalComponent';

function UserDrawer({ visible, onClose }) {
  const [sosVisible, setSosVisible] = useState(false);
  const [first, setFirst] = useState(true);
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

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <ModalComponent
        sosVisible={sosVisible}
        onCloseSos={() => {
          setSosVisible(false);
        }}
      />
      <Drawer
        placement='left'
        closable={true}
        onClose={() => {
          onClose();
        }}
        visible={visible}
        width={350}
      >
        <div
          style={{
            marginTop: 36,
          }}
        >
          {first ? (
            <>
              <div className='d-flex-center-center'>
                <Avatar size='large' icon={<UserOutlined />} />
              </div>
              <p className='stack-drawer-title mt-20'>
                Сергеев Сергей Сергеевич
              </p>
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
              <IconsGroup
                onShowSosModal={() => {
                  setSosVisible(true);
                  onClose();
                }}
                onFirst={() => {
                  setFirst(false);
                }}
              />
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
            </>
          ) : (
            <>
              <PageHeader
                className='site-page-header'
                onBack={() => setFirst(true)}
                title='Назад'
              />
              <div className='d-flex-center-center'>
                <Avatar size='large' icon={<UserOutlined />} />
              </div>
              <p className='stack-drawer-title mt-20'>
                Сергеев Сергей Сергеевич
              </p>
              <p className='d-flex-sb'>
                <span>Табельный номер:</span>
                <span className='green'>№45123345</span>
              </p>
              <p className='d-flex-sb'>
                <span>Должность:</span> <span className='green'>Сварщик</span>
              </p>
              <Divider />
              <Form layout={'vertical'}>
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item label='Дата с'>
                      <DatePicker
                        onChange={onChange}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Время'>
                      <TimePicker
                        onChange={onChange}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item label='Дата по'>
                      <DatePicker
                        onChange={onChange}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Время'>
                      <TimePicker
                        onChange={onChange}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
              <Divider />
              <p className='blue-title'>История перемещений</p>
              <p className='history-sub-title'>23.02.21 00:00:00</p>
              ======== TODO ========
              <Divider />
              <p className='blue-title'>Отчеты</p>
              <div className={'data-wrapper'}>
                <HistoryLogo />
                <span className='data-text' style={{ color: '#373737' }}>
                  Отчет о рабочем времени
                </span>
              </div>
              <div className={'data-wrapper'}>
                <HistoryLogo />
                <span className='data-text' style={{ color: '#373737' }}>
                  Отчет по нахождению в области
                </span>
              </div>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
}

export default UserDrawer;

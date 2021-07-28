import React, { useState } from 'react';
import { Button, Card, List, Input, Checkbox, Popover, Badge } from 'antd';
import { CloseOutlined, BellFilled } from '@ant-design/icons';
import { ReactComponent as SettingAltLogo } from '../../assets/icons/settings-alt.svg';
import { ReactComponent as TrashLogo } from '../../assets/icons/trash.svg';
import { ReactComponent as ParkingLogo } from '../../assets/icons/parking.svg';

import './index.css';

const { Search } = Input;

function BellPopover() {
  const [data, setData] = useState([
    {
      title: '24141.4551054..666',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
    },
    {
      title: '24141.4551054..',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
    },
  ]);

  const [settingsData, setSettingsData] = useState([
    {
      text: 'Парковка (начало)',
    },
    {
      text: 'Парковка (начало)',
    },
    {
      text: 'Парковка (начало)',
    },
    {
      text: 'Парковка (начало)',
    },
    {
      text: 'Парковка (начало)',
    },
    {
      text: 'Парковка (начало)',
    },
    {
      text: 'Парковка (начало)',
    },
    {
      text: 'Парковка (начало)',
    },
  ]);

  const [showAll, setShowAll] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Popover
      placement='bottomRight'
      content={
        <div className='bell-content-wrapper'>
          {showSettings === false ? (
            <>
              {showAll === true && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Search style={{ width: '80%' }} />
                  <SettingAltLogo
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setShowSettings(true);
                    }}
                  />
                  <TrashLogo style={{ cursor: 'pointer' }} />
                </div>
              )}
              <List
                itemLayout='vertical'
                dataSource={data}
                renderItem={(item, idx) => (
                  <List.Item key={idx}>
                    <Card
                      style={{
                        width: 400,
                        borderRadius: 10,
                        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
                      }}
                      title={
                        <div className='card-title'>
                          <Button
                            shape='circle'
                            icon={<BellFilled style={{ color: '#25ACE3' }} />}
                            style={{ marginRight: 16 }}
                          />
                          {item.title}
                          <CloseOutlined
                            style={{
                              marginLeft: 'auto',
                              color: '#25ACE3',
                              cursor: 'pointer',
                            }}
                          />
                        </div>
                      }
                    >
                      {item.text}
                    </Card>
                  </List.Item>
                )}
              />
              {showAll === false && (
                <Button
                  type='link'
                  style={{ display: 'block', margin: '0 auto' }}
                  onClick={() => {
                    let tmp = [];
                    for (let i = 0; i < 15; i++) {
                      tmp.push({
                        title: '24141.4551054..666',
                        text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
                      });
                    }
                    setData(tmp);
                    setShowAll(true);
                  }}
                >
                  Показать все
                </Button>
              )}
            </>
          ) : (
            <div style={{ width: 250, padding: 24, position: 'relative' }}>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: '19px',
                  textAlign: 'center',
                  color: '#000000',
                  paddingBottom: 20,
                }}
              >
                Настройки уведомлений
              </p>
              <CloseOutlined
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 5,
                }}
                onClick={() => {
                  setShowSettings(false);
                }}
              />

              {settingsData.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      margin: '12px 0',
                    }}
                  >
                    <ParkingLogo />
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        fontSize: 14,
                        lightHeight: '16px',
                      }}
                    >
                      {item.text}
                    </p>
                    <Checkbox />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      }
      trigger='hover'
    >
      <Badge size='small' count={2}>
        <BellFilled
          style={{
            color: '#FFB800',
            fontSize: 28,
            cursor: 'pointer',
          }}
        />
      </Badge>
    </Popover>
  );
}

export default BellPopover;

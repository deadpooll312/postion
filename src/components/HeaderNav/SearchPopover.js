import React, { useState } from 'react';
import { Input, Popover } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { ReactComponent as UserGreenLogo } from '../../assets/icons/user-green.svg';
import { ReactComponent as GoalLogo } from '../../assets/icons/goal.svg';
import { ReactComponent as SosLogo } from '../../assets/icons/sos.svg';

import './index.css';

const { Search } = Input;

function SearchPopover() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([
    {
      name: 'Albert Flores',
    },
    {
      name: 'Marvin McKinney',
    },
    {
      name: 'Albert Flores',
    },
    {
      name: 'Marvin McKinney',
    },
    {
      name: 'Albert Flores',
    },
    {
      name: 'Marvin McKinney',
    },
  ]);

  return (
    <Popover
      placement='bottomRight'
      content={
        <div style={{ width: 370, padding: 24, position: 'relative' }}>
          <CloseOutlined
            style={{
              position: 'absolute',
              top: 5,
              right: 5,
              color: '#25ACE3',
            }}
            onClick={() => {
              setVisible(false);
            }}
          />

          <div className='search-popover-wrapper'>
            <div className='search-popover-item-left'>
              <p>Тип объекта</p>
              <Input placeholder='Сотрудник' />
            </div>
            <div className='search-popover-item-right'>
              <p>Номер метки</p>
              <Input placeholder='Введите для поиска' />
            </div>
          </div>

          {data.map((item, idx) => {
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
                <UserGreenLogo
                  style={{
                    flex: '1 0 15%',
                  }}
                />
                <p
                  style={{
                    padding: 0,
                    margin: 0,
                    fontSize: 14,
                    lightHeight: '16px',
                    flex: '1 0 55%',
                  }}
                >
                  {item.name}
                </p>
                <GoalLogo
                  style={{
                    flex: '1 0 15%',
                  }}
                />
                <SosLogo
                  style={{
                    flex: '1 0 15%',
                  }}
                />
              </div>
            );
          })}
        </div>
      }
      trigger='click'
      visible={visible}
      onVisibleChange={() => {
        setVisible(true);
      }}
    >
      {visible === false ? (
        <SearchOutlined
          style={{
            color: '#fff',
            fontSize: 28,
            cursor: 'pointer',
          }}
        />
      ) : (
        <Search
          size='large'
          style={{ width: 400 }}
          className='header-search-input'
        />
      )}
    </Popover>
  );
}

export default SearchPopover;

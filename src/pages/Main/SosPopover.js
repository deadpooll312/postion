import React, { useState } from 'react';
import { Affix, Popover, Checkbox, Input } from 'antd';
import { ReactComponent as SosLargeLogo } from '../../assets/icons/sos-large.svg';

const { Search } = Input;

function SosPopover() {
  const [data, setData] = useState([
    {
      text: 'Группы',
    },
    {
      text: 'Флотаторы',
    },
    {
      text: 'Газосварщики',
    },
  ]);
  return (
    <Affix style={{ position: 'absolute', bottom: 60, left: 60, zIndex: 999 }}>
      <Popover
        placement='topLeft'
        content={
          <div style={{ padding: 30, width: 250 }}>
            {data.map((item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <p>{item.text}</p> <Checkbox />
                </div>
              );
            })}
            <Search
              className='sos-search-input'
              placeholder='Начните вводить'
              //   onSearch={onSearch}
              //   style={{ width: 200 }}
            />
          </div>
        }
        trigger='hover'
      >
        <SosLargeLogo
          style={{
            filter: 'drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.15))',
            cursor: 'pointer',
          }}
        />
      </Popover>
    </Affix>
  );
}

export default SosPopover;

import React, { useState } from 'react';
import './index.css';

function SwtichGroup({ list }) {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <>
      <div className='switch-group'>
        {list.map((item) => {
          return (
            <a
              onClick={() => {
                setSelectedItem(item.id);
              }}
              className={item.id === selectedItem ? 'active' : ''}
              key={item.id}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </>
  );
}

export default SwtichGroup;

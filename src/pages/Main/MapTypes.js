import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as MapLogo } from '../../assets/icons/map.svg';
import { ReactComponent as BuildingLogo } from '../../assets/icons/building.svg';
import { ReactComponent as PlanLogo } from '../../assets/icons/plan.svg';

import './index.css';

function MapTypes({ changeMapTypes }) {
  const [active, setActive] = useState(1);
  const logos = [
    {
      id: 1,
      icon: <MapLogo />,
      mapTypes: 'MAP',
    },
    {
      id: 2,
      icon: <BuildingLogo />,
      mapTypes: 'BUILDING',
    },
    {
      id: 3,
      icon: <PlanLogo />,
      mapTypes: 'PLAN',
    },
  ];

  return (
    <div className='logos-wrapper'>
      {logos.map((item) => {
        return (
          <span
            key={item.id}
            onClick={() => {
              setActive(item.id);
              changeMapTypes(item.mapTypes);
            }}
          >
            {item.icon}
          </span>
        );
      })}
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    changeMapTypes: (type) => dispatch({ type }),
  };
}

export default connect(null, mapDispatchToProps)(MapTypes);

import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { ReactComponent as DefaultLogo } from '../../assets/icons/defaultlogo.svg';
import { ReactComponent as AimLogo } from '../../assets/icons/aim.svg';
import { ReactComponent as SosLogo } from '../../assets/icons/sos-medium.svg';
import { ReactComponent as CameraLogo } from '../../assets/icons/camera-large.svg';
import { ReactComponent as ClockLogo } from '../../assets/icons/clock.svg';

import './index.css';

function IconsGroup() {
  const logos = [
    {
      id: 1,
      icon: <DefaultLogo />,
    },
    {
      id: 2,
      icon: <AimLogo />,
    },
    {
      id: 3,
      icon: <SosLogo />,
    },
    {
      id: 4,
      icon: <CameraLogo />,
    },
    {
      id: 5,
      icon: <ClockLogo />,
    },
  ];

  return (
    <div className='logos-wrapper'>
      {logos.map((item) => {
        return (
          <span key={item.id} onClick={() => {}}>
            {item.icon}
          </span>
        );
      })}
    </div>
  );
}

export default IconsGroup;

// function mapDispatchToProps(dispatch) {
//   return {
//     changeMapTypes: (type) => dispatch({ type }),
//   };
// }

// export default connect(null, mapDispatchToProps)(MapTypes);

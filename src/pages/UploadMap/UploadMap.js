import React, { useState } from 'react';

import SideBar from './components/SideBar';
import CRSMap from './components/CRSMap/index';

import './index.scss';

const UploadMap = () => {
  const [image, setImage] = useState(null);

  return (
    <div className="content">
      <SideBar setImage={setImage} image={image} />
      <div className="content-page">
        {image ? (
          <CRSMap image={image} />
        ) : (
          <h4>
            Select image from the previews list for coordinate system
            configuration
          </h4>
        )}
      </div>
    </div>
  );
};

export default UploadMap;

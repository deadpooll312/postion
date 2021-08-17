import React from 'react';

import './index.scss';
import CRSMap from './components/CRSMap/index';

const selectedImage = false;

const UploadMap = () => {
  return (
    <div className="content">
      <div className="sidebar">
        <input className="input" placeholder="Map name"></input>
        <button className="btn">+</button>
        <div className="form-item">
          <div className="form-image"></div>
          <div className="form-tex">
            <h4> Form item</h4>
            <h4>0x0</h4>
            <h4>scale: ?</h4>
            <button className="form-btn">Delete</button>
          </div>
        </div>
      </div>
      <div className="content-page">
        {selectedImage ? (
          <CRSMap />
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

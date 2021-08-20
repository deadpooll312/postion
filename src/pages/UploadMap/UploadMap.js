import React, { useState } from 'react';

import CoordinatesForm from './components/CoordinatesForm';
import SideBar from './components/SideBar';
import CRSMap from './components/CRSMap/index';

import './index.scss';

import svgImage from '../../assets/layers/pic-2.svg';

const UploadMap = () => {
  const [image, setImage] = useState();

  const [pointA, setPointA] = useState({ lat: 0, lng: 0 });
  const [pointL0, setPointL0] = useState();
  const [pointL1, setPointL1] = useState();
  const [bounds, setBounds] = useState();

  const onSubmit = (args) => {
    const { x, y, z, l } = args;
    const [, { lat: height, lng: width }] = bounds;
  };

  return (
    <div className="content">
      <SideBar setImage={setImage} image={image} />
      <div className="content-page">
        {image ? (
          <>
            <CoordinatesForm onSubmit={onSubmit} />
            <CRSMap
              image={image}
              pointA={pointA}
              pointL0={pointL0}
              pointL1={pointL1}
              bounds={bounds}
              setPointA={setPointA}
              setPointL0={setPointL0}
              setPointL1={setPointL1}
              setBounds={setBounds}
            />
          </>
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

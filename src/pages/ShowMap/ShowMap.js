import React, { useState } from 'react';
import { connect } from 'react-redux';

import CRSMap from './components/CRSMap';
import UserDrawer from '../Main/UserDrawer';

function ShowMap() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [keeper, setKeeper] = useState();

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const handleClickMarker = (keeper) => {
    setKeeper(keeper);
    showDrawer();
  };

  return (
    <>
      <UserDrawer
        visible={isDrawerVisible}
        keeper={keeper}
        onClose={closeDrawer}
      />
      <CRSMap handleClickMarker={handleClickMarker} />
    </>
  );
}

export default connect()(ShowMap);

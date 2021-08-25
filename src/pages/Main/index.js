import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MapComponent from './MapComponent';
import CRSComponent from './CRSComponent';
import Buttons from './Buttons';
import { Drawer, Divider } from 'antd';

import { ReactComponent as ClockMiniLogo } from '../../assets/icons/clock-mini.svg';
import { ReactComponent as BookmarkMiniLogo } from '../../assets/icons/bookmark-mini.svg';
import { ReactComponent as StartMiniLogo } from '../../assets/icons/star-mini.svg';
import { ReactComponent as StartMiniYellowLogo } from '../../assets/icons/star-mini-yellow.svg';

import './index.css';

const recentZone = [
  'Корпус ЗИиОФ 0',
  'Добление 0',
  'Корпус ЗИиОФ 6.2',
  'Корпус ЗИиОФ 11.2',
  'Добление 18',
];

const frequentZone = [
  'Корпус ЗИиОФ 0',
  'Добление 0',
  'Корпус ЗИиОФ 6.2',
  'Корпус ЗИиОФ 11.2',
];

const importantZone = [
  'Корпус ЗИиОФ 0',
  'Добление 0',
  'Корпус ЗИиОФ 6.2',
  'Корпус ЗИиОФ 11.2',
];

function Main({ mapType }) {
  const [visibleBook, setVisibleBook] = useState(false);
  useEffect(() => {
    // keepers.get();
  }, []);

  function mapRender(mapType) {
    switch (mapType) {
      case 'MAP':
        return <MapComponent />;
      case 'BUILDING':
        return <>BUILDING</>;
      case 'PLAN':
        return <CRSComponent />;
      default:
        return <MapComponent />;
    }
  }

  return (
    <>
      {mapRender(mapType)}
      <Buttons
        showBook={() => {
          setVisibleBook(true);
        }}
      />
      <Drawer
        className={'book-drawer'}
        headerStyle={{
          textAlign: 'center',
          padding: '60px',
          color: '#25ACE3',
        }}
        contentWrapperStyle={{
          width: 350,
        }}
        title="Закладки"
        placement={'right'}
        closable={true}
        onClose={() => {
          setVisibleBook(false);
        }}
        visible={visibleBook}
        key={'right'}
      >
        <div>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 24,
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '21px',
              color: '#353535',
            }}
          >
            <ClockMiniLogo
              style={{
                marginRight: 15,
              }}
            />
            Недавние зоны
          </p>
          <ul
            style={{
              paddingLeft: 64,
            }}
          >
            {recentZone.map((item, idx) => {
              return (
                <li
                  style={{
                    listStyle: 'none',
                    color: '#9E9E9E',
                    fontSize: 16,
                    lineHeight: '19px',
                    marginTop: 10,
                  }}
                  key={idx}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <Divider />
        <div>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 24,
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '21px',
              color: '#353535',
            }}
          >
            <BookmarkMiniLogo
              style={{
                marginRight: 15,
              }}
            />
            Частые зоны
          </p>
          <ul
            style={{
              paddingLeft: 64,
            }}
          >
            {recentZone.map((item, idx) => {
              return (
                <li
                  style={{
                    listStyle: 'none',
                    color: '#9E9E9E',
                    fontSize: 16,
                    lineHeight: '19px',
                    marginTop: 10,
                  }}
                  key={idx}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <Divider />
        <div>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 24,
              fontWeight: 500,
              fontSize: 18,
              lineHeight: '21px',
              color: '#353535',
            }}
          >
            <StartMiniLogo
              style={{
                marginRight: 15,
              }}
            />
            Частые зоны
          </p>
          <ul
            style={{
              paddingLeft: 56,
            }}
          >
            {recentZone.map((item, idx) => {
              return (
                <li
                  style={{
                    listStyle: 'none',
                    color: '#9E9E9E',
                    fontSize: 16,
                    lineHeight: '19px',
                    marginTop: 10,
                  }}
                  key={idx}
                >
                  <StartMiniYellowLogo
                    style={{
                      marginRight: 8,
                    }}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
}

function mapStateToProps(state) {
  return {
    mapType: state.mapType.mapType,
  };
}

export default connect(mapStateToProps)(Main);

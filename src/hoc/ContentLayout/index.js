import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Drawer, Divider } from 'antd';

import HeaderNav from '../../components/HeaderNav';
import SwtichGroup from '../../components/SwtichGroup';

import { ReactComponent as DocumentLogo } from '../../assets/icons/document.svg';
import { ReactComponent as DashboardLogo } from '../../assets/icons/dashboard.svg';
import { ReactComponent as MapLocationLogo } from '../../assets/icons/map-location.svg';
import { ReactComponent as SettingsLogo } from '../../assets/icons/settings.svg';

import { UPLOAD_MAP, SHOW_MAP } from '../../consts/routes';

const { Content } = Layout;

function ContentLayout(props) {
  const { isAuthenticated } = props;
  const [visible, setVisible] = useState(false);

  if (!isAuthenticated) {
    return (
      <>
        {/* {isLoading && <Loader />} */}
        {props.children}
      </>
    );
  }

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Layout className="site-layout">
          <Drawer
            width={350}
            placement={'left'}
            onClose={() => {
              setVisible(false);
            }}
            visible={visible}
            key={'left'}
            footer={
              <div className="d-flex-center-center mb-38">
                <SwtichGroup
                  list={[
                    { id: 0, title: 'KZ' },
                    { id: 1, title: 'RU' },
                    { id: 2, title: 'EN' },
                  ]}
                />
              </div>
            }
          >
            <div
              className="auth-container__logo"
              style={{
                marginTop: 48,
              }}
            ></div>
            <div
              style={{
                padding: '32px 64px 0px',
              }}
            >
              <p className="d-flex-center-center">
                <MapLocationLogo
                  style={{
                    flex: '1 1 30%',
                  }}
                />
                <span
                  style={{
                    flex: '1 1 70%',
                  }}
                >
                  Карты
                </span>
              </p>
              <p className="d-flex-center-center">
                <DashboardLogo
                  style={{
                    flex: '1 1 30%',
                  }}
                />
                <span
                  style={{
                    flex: '1 1 70%',
                  }}
                >
                  Дэшборды
                </span>
              </p>
              <p className="d-flex-center-center">
                <DocumentLogo
                  style={{
                    flex: '1 1 30%',
                  }}
                />
                <span
                  style={{
                    flex: '1 1 70%',
                  }}
                >
                  Отчеты
                </span>
              </p>
              <Link to={UPLOAD_MAP} onClick={() => setVisible(false)}>
                <p className="d-flex-center-center">
                  <MapLocationLogo
                    style={{
                      flex: '1 1 30%',
                    }}
                  />
                  <span
                    style={{
                      flex: '1 1 70%',
                    }}
                  >
                    Maps list
                  </span>
                </p>
              </Link>
              <Link to={SHOW_MAP} onClick={() => setVisible(false)}>
                <p className="d-flex-center-center">
                  <MapLocationLogo
                    style={{
                      flex: '1 1 30%',
                    }}
                  />
                  <span
                    style={{
                      flex: '1 1 70%',
                    }}
                  >
                    View Map
                  </span>
                </p>
              </Link>
              <Divider />
              <p className="d-flex-center-center">
                <SettingsLogo
                  style={{
                    flex: '1 1 30%',
                  }}
                />
                <span
                  style={{
                    flex: '1 1 70%',
                  }}
                >
                  Конфигурация
                </span>
              </p>
            </div>
          </Drawer>
          <HeaderNav
            onOpen={() => {
              setVisible(true);
            }}
          />
          <Content>{props.children}</Content>
        </Layout>
      </Layout>
    </>
  );
}

export default ContentLayout;

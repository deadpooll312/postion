import React from 'react';
import { Layout, PageHeader, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import BellPopover from './BellPopover';
import SettingsPopover from './SettingsPopover';
import SearchPopover from './SearchPopover';
import './index.css';

const { Header } = Layout;

function HeaderNav({ onOpen }) {
  return (
    <>
      <Header>
        <PageHeader
          className='site-page-header'
          title={
            <div
              className='header-menu-wrapper'
              onClick={() => {
                onOpen();
              }}
            >
              <MenuOutlined
                style={{
                  color: '#fff',
                }}
              />
            </div>
          }
          extra={[
            <div key='1'>
              <Space size={48}>
                <SearchPopover />
                <BellPopover />
                <SettingsPopover />
              </Space>
            </div>,
          ]}
        />
      </Header>
    </>
  );
}

export default HeaderNav;

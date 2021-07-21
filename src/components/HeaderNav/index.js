import React from 'react';
import { Layout, PageHeader, Space, Badge } from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  SearchOutlined,
  BellFilled,
} from '@ant-design/icons';

import './index.css';

const { Header } = Layout;

function HeaderNav({ onOpen }) {
  return (
    <Header>
      <PageHeader
        className='site-page-header'
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#25ACE3',
              padding: 25,
              cursor: 'pointer',
            }}
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
            <Space>
              <SearchOutlined
                style={{
                  color: '#fff',
                  fontSize: 28,
                  marginRight: 48,
                  cursor: 'pointer',
                }}
              />
              <Badge
                size='small'
                count={2}
                style={{
                  marginRight: 48,
                }}
              >
                <BellFilled
                  style={{
                    color: '#FFB800',
                    fontSize: 28,
                    marginRight: 48,
                    cursor: 'pointer',
                  }}
                />
              </Badge>
              <UserOutlined
                style={{
                  color: '#fff',
                  fontSize: 28,
                  cursor: 'pointer',
                }}
              />
            </Space>
          </div>,
        ]}
      />
    </Header>
  );
}

export default HeaderNav;

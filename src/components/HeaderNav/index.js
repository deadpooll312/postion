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

function HeaderNav() {
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
          <div>
            <Space>
              <SearchOutlined
                style={{
                  color: '#fff',
                  fontSize: 32,
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
                    fontSize: 32,
                    marginRight: 48,
                    cursor: 'pointer',
                  }}
                />
              </Badge>
              <UserOutlined
                style={{
                  color: '#fff',
                  fontSize: 32,
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

import React, { useState } from 'react';
import {
  Layout,
  PageHeader,
  Space,
  Badge,
  Popover,
  Button,
  Avatar,
  Card,
  List,
  Modal,
  Form,
  Input,
} from 'antd';
import {
  MenuOutlined,
  UserOutlined,
  SearchOutlined,
  CloseOutlined,
  BellFilled,
  EditOutlined,
} from '@ant-design/icons';

import BellPopover from './BellPopover';
import SettingsPopover from './SettingsPopover';

import './index.css';

const { Header } = Layout;

const data = [
  {
    title: '24141.4551054..666',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
  },
  {
    title: '24141.4551054..',
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
  },
];

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

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
                <SearchOutlined
                  style={{
                    color: '#fff',
                    fontSize: 28,
                    cursor: 'pointer',
                  }}
                />
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

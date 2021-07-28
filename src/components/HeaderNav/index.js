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

import { ReactComponent as SettingAltLogo } from '../../assets/icons/settings-alt.svg';
import { ReactComponent as LogoutLogo } from '../../assets/icons/logout.svg';

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

const bellPopoverContent = (
  <div>
    <List
      itemLayout='vertical'
      dataSource={data}
      renderItem={(item, idx) => (
        <List.Item key={idx}>
          <Card
            style={{
              width: 400,
              borderRadius: 10,
              boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
            }}
            title={
              <div className='card-title'>
                <Button
                  shape='circle'
                  icon={<BellFilled style={{ color: '#25ACE3' }} />}
                  style={{ marginRight: 16 }}
                />
                {item.title}
                <CloseOutlined
                  style={{
                    marginLeft: 'auto',
                    color: '#25ACE3',
                    cursor: 'pointer',
                  }}
                />
              </div>
            }
          >
            {item.text}
          </Card>
        </List.Item>
      )}
    />
    <Button type='link' style={{ display: 'block', margin: '0 auto' }}>
      Показать все
    </Button>
  </div>
);

const userTitle = (
  <div className='user-title-wrapper'>
    <Avatar size='large' icon={<UserOutlined />} />
    <p style={{ paddingLeft: 8 }}>
      <span className='user-title__name-text'>System</span>
      <br />
      <span className='user-title__position-text'>Системный администратор</span>
    </p>
  </div>
);

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
function HeaderNav({ onOpen }) {
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);
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
                <Popover
                  placement='bottomRight'
                  content={bellPopoverContent}
                  trigger='hover'
                >
                  <Badge size='small' count={2}>
                    <BellFilled
                      style={{
                        color: '#FFB800',
                        fontSize: 28,
                        cursor: 'pointer',
                      }}
                    />
                  </Badge>
                </Popover>

                <Popover
                  placement='bottomRight'
                  content={
                    <div className='content-wrapper'>
                      <p
                        className='content-item-wrapper'
                        onClick={() => {
                          setVisible(true);
                        }}
                      >
                        <SettingAltLogo className='content-item-wrapper__logo' />
                        <span className='content-item-wrapper__span'>
                          Настройки
                        </span>
                      </p>
                      <p className='content-item-wrapper'>
                        <LogoutLogo className='content-item-wrapper__logo' />
                        <span className='content-item-wrapper__span'>
                          Выйти
                        </span>
                      </p>
                    </div>
                  }
                  title={userTitle}
                  trigger='hover'
                >
                  <UserOutlined
                    style={{
                      color: '#fff',
                      fontSize: 28,
                      cursor: 'pointer',
                    }}
                  />
                </Popover>
              </Space>
            </div>,
          ]}
        />
      </Header>
      <Modal
        centered
        visible={true}
        footer={null}
        visible={visible}
        onOk={() => {
          setVisible(false);
          setEdit(false);
        }}
        onCancel={() => {
          setVisible(false);
          setEdit(false);
        }}
      >
        {edit === true ? (
          <>
            <p
              style={{
                fontWeight: 900,
                fontSize: 18,
                textAlign: 'center',
                color: '#00A2E8',
              }}
            >
              Смена пароля
            </p>
            <Form layout={'vertical'}>
              <Form.Item
                label='Действующий пароль'
                name='current-password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password value={'password'} />
              </Form.Item>
              <Form.Item
                name='new-password'
                label='Новый пароль'
                rules={[{ required: true }]}
              >
                <Input.Password value={'password'} />
              </Form.Item>
              <Form.Item
                name='repeat-password'
                label='Подвердите новый пароль'
                rules={[{ required: true }]}
              >
                <Input.Password value={'password'} />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Подтвердить
                </Button>
                <Button
                  htmlType='button'
                  style={{ marginLeft: 16 }}
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Отмена
                </Button>
              </Form.Item>
            </Form>
          </>
        ) : (
          <>
            <Avatar
              size={72}
              icon={<UserOutlined />}
              style={{ display: 'block', margin: '24px auto' }}
            />
            <p
              style={{
                fontWeight: 900,
                fontSize: 18,
                textAlign: 'center',
                color: '#00A2E8',
              }}
            >
              Сергеев Сергей Сергеевич
            </p>
            <Form layout={'vertical'}>
              <Form.Item label='Должность'>
                <Input value={'Сергеев Сергей Сергеевич'} disabled />
              </Form.Item>
              <Form.Item label='Телефон'>
                <Input value={'+7 (123) 45-67-890'} disabled />
              </Form.Item>
              <Form.Item label='Email'>
                <Input value={'email1@gmail.com'} disabled />
              </Form.Item>
              <div
                style={{ display: 'flex', alignItems: 'center', width: '100%' }}
              >
                <Form.Item label='Пароль' style={{ flex: '1 0 0' }}>
                  <Input.Password value={'email1@gmail.com'} disabled />
                </Form.Item>
                <EditOutlined
                  onClick={() => {
                    setEdit(true);
                  }}
                  style={{ cursor: 'pointer', marginLeft: 16 }}
                />
              </div>
            </Form>
          </>
        )}
      </Modal>
    </>
  );
}

export default HeaderNav;

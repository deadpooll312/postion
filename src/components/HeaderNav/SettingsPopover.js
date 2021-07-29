import React, { useState } from 'react';
import { Popover, Button, Avatar, Modal, Form, Input } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';

import { ReactComponent as SettingAltLogo } from '../../assets/icons/settings-alt.svg';
import { ReactComponent as LogoutLogo } from '../../assets/icons/logout.svg';
import { ReactComponent as UserLogo } from '../../assets/icons/user.svg';

import './index.css';

function SettingsPopover() {
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);

  const userTitle = (
    <div className='user-title-wrapper'>
      <Avatar size='large' icon={<UserOutlined />} />
      <p style={{ paddingLeft: 8 }}>
        <span className='user-title__name-text'>System</span>
        <br />
        <span className='user-title__position-text'>
          Системный администратор
        </span>
      </p>
    </div>
  );

  return (
    <>
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
              <span className='content-item-wrapper__span'>Настройки</span>
            </p>
            <p className='content-item-wrapper'>
              <LogoutLogo className='content-item-wrapper__logo' />
              <span className='content-item-wrapper__span'>Выйти</span>
            </p>
          </div>
        }
        title={userTitle}
        trigger='hover'
      >
        <UserLogo
          style={{
            cursor: 'pointer',
          }}
        />
      </Popover>
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

export default SettingsPopover;

import React, { useEffect } from 'react';

import { Form, Input, Button, Card, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// import { authenticationService } from '../../services/authenticationService';

import './index.css';

function Authorization(props) {
  //   useEffect(() => {
  //     if (props.isAuthenticated) {
  //       props.history.push('/main');
  //     }
  //   }, [props]);

  const onFinish = ({ email, password }) => {
    // props.showLoader();
    // authenticationService
    //   .login(email, password)
    //   .then((response) => {})
    //   .then(() => {
    //     props.hideLoader();
    //     props.signIn();
    //     props.history.push('/main');
    //   })
    //   .catch(() => {
    //     props.hideLoader();
    //   });
  };

  return (
    <div className='auth-container'>
      <Card
        bordered={false}
        style={{ width: '35%', padding: '0' }}
        className='auth-container__form-wrapper'
      >
        <div className='auth-container__logo'></div>
        <p className='auth-container__title'>Авторизация в сестеме</p>
        <Form
          layout={'vertical'}
          name='normal_login'
          className='login-form mt-24'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name='login'
            label='Логин'
            rules={[{ required: true, message: 'ВВедите логин' }]}
          >
            <Input shape='round' className='auth-container__input' />
          </Form.Item>
          <Form.Item
            name='password'
            label='Пароль*'
            rules={[{ required: true, message: 'Введите Пароль' }]}
          >
            <Input className='auth-container__input' type='password' />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' noStyle>
              <a href='' style={{ textDecoration: 'underline' }}>
                KZ
              </a>
              <a href='' style={{ marginLeft: 5, textDecoration: 'underline' }}>
                RU
              </a>
              <a href='' style={{ marginLeft: 5, textDecoration: 'underline' }}>
                EN
              </a>
            </Form.Item>
            <a href='' style={{ float: 'right' }}>
              Забыли пароль?
            </a>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' className='auth-container__btn'>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Authorization;

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Form, Input, Button, Card, Modal } from 'antd';

import { authenticationService } from '../../services/authenticationService';

import './index.css';
import SwtichGroup from '../../components/SwtichGroup';
import { MAIN } from '../../consts/routes';
import setAuth from '../../helpers/setAuth';

function Authorization(props) {
  const [visible, setVisible] = useState(false);
  const [errorText, setErrorText] = useState(false);

  useEffect(() => {
    if (props.isAuthenticated) {
      props.history.push(MAIN);
    }
  }, [props]);

  const onFinish = ({ login, password }) => {
    authenticationService
      .login(login, password)
      .then(() => {
        setAuth();
        props.history.push(MAIN);
      })
      .catch(() => {
        setErrorText(true);
      });
  };

  return (
    <div className="auth-container">
      <Modal
        centered
        visible={visible}
        footer={null}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        className={'auth-container--modal'}
      >
        <p className="modal-title">Восстановление доступа</p>
        <p>
          Для восстановления доступа к аккаунту, обратитесь к администратору
          системы?
        </p>
        <Button
          className="auth-container__btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          Ок
        </Button>
      </Modal>
      <Card
        bordered={false}
        style={{ width: 500, padding: '0' }}
        className="auth-container__form-wrapper"
      >
        <div className="auth-container__logo"></div>
        <p className="auth-container__title">Авторизация в системе</p>
        {errorText === true && (
          <p className="auth-container__error-text">
            Ошибка входа, неправильный логин или пароль
          </p>
        )}
        <Form
          layout={'vertical'}
          name="normal_login"
          className="login-form mt-24"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="login"
            label="Логин"
            rules={[{ required: true, message: 'Введите логин' }]}
          >
            <Input shape="round" className="auth-container__input" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Пароль*"
            rules={[{ required: true, message: 'Введите Пароль' }]}
          >
            <Input className="auth-container__input" type="password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" noStyle>
              <SwtichGroup
                list={[
                  { id: 0, title: 'KZ' },
                  { id: 1, title: 'RU' },
                  { id: 2, title: 'EN' },
                ]}
              />
            </Form.Item>
            <a
              style={{ float: 'right', textDecoration: 'underline' }}
              onClick={() => {
                setVisible(true);
              }}
            >
              Забыли пароль?
            </a>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="auth-container__btn">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch({ type: 'SIGN_IN' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);

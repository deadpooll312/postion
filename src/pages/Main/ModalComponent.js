import React from 'react';
import { Modal, Button } from 'antd';

import './index.css';

function ModalComponent({ sosVisible, onCloseSos }) {
  return (
    <Modal
      centered
      visible={sosVisible}
      footer={null}
      onOk={() => onCloseSos()}
      onCancel={() => onCloseSos()}
    >
      <p className='sos-modal-title'>Отправить SOS</p>
      <p className='sos-modal-text'>
        Вы действительно хотите отправить сигнал SOS?
      </p>
      <div className='d-flex-sb'>
        <Button
          className='sos-modal-send-btn'
          onClick={() => {
            //   setVisible(false);
          }}
        >
          Отправить
        </Button>
        <Button
          className='sos-modal-cancel-btn'
          onClick={() => {
            //   setVisible(false);
          }}
        >
          Отмена
        </Button>
      </div>
    </Modal>
  );
}

export default ModalComponent;

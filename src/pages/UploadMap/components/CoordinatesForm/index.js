import './index.scss';
import { Button, Form, Input } from 'antd';
import React from 'react';

const CoordinatesForm = ({ onSubmit }) => {
  return (
    <div className="form-wrapper">
      <Form onFinish={onSubmit}>
        <Form.Item
          name="x"
          label="X"
          initialValue={0}
          rules={[{ required: true, message: 'Введите x' }]}
        >
          <Input shape="round" type="number" />
        </Form.Item>
        <Form.Item
          name="y"
          label="Y"
          initialValue={0}
          rules={[{ required: true, message: 'Введите y' }]}
        >
          <Input shape="round" type="number" />
        </Form.Item>
        <Form.Item
          name="z"
          label="Z"
          initialValue={0}
          rules={[{ required: true, message: 'Введите z' }]}
        >
          <Input shape="round" type="number" />
        </Form.Item>
        <Form.Item
          name="l"
          label="Segment length"
          initialValue={1}
          rules={[{ required: true, message: 'Введите segment length' }]}
        >
          <Input shape="round" type="number" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CoordinatesForm;

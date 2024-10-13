import React from 'react';
import { Row, Col, Form, Input, Button, Typography } from 'antd';
import './Contact.css';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log('Form values:', values);
    form.resetFields();
  };

  return (
    <section id="contact" className="contact-section">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <div className="contact-details">
            <Title level={2}>Volt Metal Industries</Title>
            <Paragraph>
              Phone: +91 12345 67890
              <br />
              Email: info@voltmetal.com
              <br />
              Address: Shanker Tekri, Udyognagar, Jamnagar, Gujarat - India
            </Paragraph>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
              <Input placeholder="Phone" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item name="inquiry" label="Inquiring For?" rules={[{ required: true }]}>
              <Input placeholder="Inquiring For?" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Get Our Best Prices
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
